import { Transaction } from "../types/transaction.type";


export const generateChartData = (): Transaction[] => {

  const data: Transaction[] = [];    
  
  // Generate data for the last 7 days (including today)
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Format date as YYYY-MM-DD
    const dateString = date.toISOString().split('T')[0];
    
    // Generate the random amount
    const amount = Math.floor(Math.random() * 10000) + 1;
    
    data.push({
      date: dateString,
      amount: amount
    });
  }
  
  return data;
};