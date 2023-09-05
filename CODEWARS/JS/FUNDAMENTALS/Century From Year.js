function century(year) {
    return year % 100 > 0 ? Math.trunc(year / 100 + 1) : Math.trunc(year / 100);
}