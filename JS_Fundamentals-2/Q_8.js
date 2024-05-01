const eventDate = '2024-08-31';
function calculateRemainingDays(){
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);
    const timeDifference = eventDateTime-currentDate;
    const daysRemaining = Math.ceil(timeDifference/(1000 * 60 * 60 * 24));
    return daysRemaining;
}
console.log(calculateRemainingDays(eventDate));