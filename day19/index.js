

function movie(card, ticket, perc) {
   // var costA = n = 0,
    // costB = card;
    // while (Math.ceil(costB)>=costA) {
    // costA +=ticket;
    // costB += ticket * Math.pow(perc, ++n);
    // }
    // return n;
    let discountprice = ticket*perc; //
    let pac = ticket; //
    let pbc = card + discountprice; //
    let ticketcount = 1; //
    for(let num = 0;;num++)
      if(Math.ceil(pac) <= Math.ceil(pbc)){
        discountprice *= perc;
        pbc += discountprice;
        pac += ticket;
        ticketcount += 1;
      }else{break}
    return ticketcount;
  };
  module.exports = movie