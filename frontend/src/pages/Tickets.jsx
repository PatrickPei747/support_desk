import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';

function Tickets() {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton />
      {tickets.length > 0 ? (
        <div>
          {' '}
          <h1>Tickets</h1>
          <div className='tickets'>
            <div className='ticket-headings'>
              <div>Date</div>
              <div>Product</div>
              <div>Status</div>
            </div>
            {tickets.map((ticket) => (
              <TicketItem key={ticket._id} ticket={ticket} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className='no-ticket'>You don't have any ticket yet!</h1>
      )}
    </>
  );
}

export default Tickets;
