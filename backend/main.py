
class TokenBucket:
    """
    Offline Token Bucket Limiter
    Args: 
        capacity: float (max capacity of token bucket)
        refill_rate_per_sec: float (refill rate of token bucket)
    """
    def __init__(self, capacity: float, refill_rate_per_sec: float) -> None:
        self.capacity: float = capacity
        self.refill_rate_per_sec: float = refill_rate_per_sec
        self.tokens: float = capacity
        self.last_refill_time: float | None = None

    def allow_request(self, current_time: float) -> bool:
        if self.last_refill_time is None:
            self.last_refill_time = current_time
            
        elapsed_time: float = current_time - self.last_refill_time
        self.tokens = min(
            self.capacity, self.tokens + elapsed_time * self.refill_rate_per_sec
        )
        self.last_refill_time = current_time
        
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False

    def simulate_token_bucket(self, requests: list[float]) -> list[dict]:
        """
        simulates offline token bucket limiter
        Args:
            request: list[float] (time stamp to check)
        Returns:
            list[dict]: 
            {"t": float, "allowed": bool, "tokens_after": float}
        """
        output_response: list[dict] = []
        for t in requests:
            allowed: bool = self.allow_request(t)
            output_response.append(
                {"t": t, "allowed": allowed, "tokens_after": round(self.tokens, 4)}
            )
        return output_response

    def __str__(self) -> str:
        return f"TokenBucket(capacity={self.capacity}, refill_rate_per_sec={self.refill_rate_per_sec})"
