export const formatTime = (number) => {
    if (number < 10)
    {
        return "0" + number;
    }
    
    return number;
}