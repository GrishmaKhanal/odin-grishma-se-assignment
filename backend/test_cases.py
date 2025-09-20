from main import TokenBucket


def run_simulation(capacity, rate, requests):
    tb = TokenBucket(capacity, rate)
    return tb.simulate_token_bucket(requests)


def test_basic_sanity():
    output = run_simulation(3, 1, [0.0, 0.1, 0.2])
    assert all(entry["allowed"] for entry in output)
    assert output[-1]["tokens_after"] < 3


def test_bucket_empty_denial():
    output = run_simulation(2, 1, [0.0, 0.1, 0.2])
    assert output[0]["allowed"] is True
    assert output[1]["allowed"] is True
    assert output[2]["allowed"] is False


def test_refill_over_time():
    output = run_simulation(2, 1, [0.0, 1.0, 2.0, 3.0])
    assert all(entry["allowed"] for entry in output)


def test_bursty_traffic():
    output = run_simulation(5, 2, [0.0, 0.01, 0.02, 0.03, 0.04, 0.05])
    allowed_flags = [entry["allowed"] for entry in output]
    assert allowed_flags == [True, True, True, True, True, False]


def test_long_idle_gap():
    output = run_simulation(4, 1, [0.0, 0.1, 5.0, 5.1, 5.2, 5.3, 5.4])
    allowed_flags = [entry["allowed"] for entry in output]
    assert allowed_flags == [True, True, True, True, True, True, False]


def test_nonzero_start_time():
    output = run_simulation(3, 1, [10.0, 10.1, 10.2])
    allowed_flags = [entry["allowed"] for entry in output]
    # Depending on init, all should be allowed (bucket full at first use)
    assert allowed_flags == [True, True, True]

def test_expected_scenario():
    input_data = {
        "capacity": 5,
        "refill_rate_per_sec": 2,
        "requests": [0.0, 0.1, 0.2, 1.5, 1.6, 1.7, 3.9, 4.0],
    }
    token_bucket_handler = TokenBucket(
        input_data["capacity"], input_data["refill_rate_per_sec"]
    )
    output = token_bucket_handler.simulate_token_bucket(input_data["requests"])
    expected_output = [
        {"t": 0.0, "allowed": True, "tokens_after": 4.0},
        {"t": 0.1, "allowed": True, "tokens_after": 3.2},
        {"t": 0.2, "allowed": True, "tokens_after": 2.4},
        {"t": 1.5, "allowed": True, "tokens_after": 4.0},
        {"t": 1.6, "allowed": True, "tokens_after": 3.2},
        {"t": 1.7, "allowed": True, "tokens_after": 2.4},
        {"t": 3.9, "allowed": True, "tokens_after": 4.0},
        {"t": 4.0, "allowed": True, "tokens_after": 3.2},
    ]
    assert output == expected_output
