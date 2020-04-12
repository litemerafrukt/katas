from datetime import datetime, timedelta


def add_gigasecond(birthdate: datetime) -> datetime:
    return birthdate + timedelta(seconds=10**9)
