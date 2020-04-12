class Clock():
    def __init__(self, hour, minute):
        self._minutes = minute + hour * 60

    def hour(self):
        return (self._minutes // 60) % 24

    def minute(self):
        return self._minutes % 60

    def add(self, minutes):
        self._minutes += minutes
        return self

    def __str__(self):
        return '{:{fill}2}:{:{fill}2}'.format(
            self.hour(), self.minute(), fill='0')

    def __eq__(self, other):
        return self.hour() == other.hour() and self.minute() == other.minute()
