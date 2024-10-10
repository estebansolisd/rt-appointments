export const recentDealsQuery = `
query recentDeals($limit: Int!) {
  recentDeals(limit: $limit) {
    id
    street
    city
    state
    area
    appointmentDate
    price
    status
    numOfPeople
    customerId
  }
}
`;
