import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const QueryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking#${data.id} successfully checked out`);
      QueryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error(" There is an error while checking out"),
  });

  return { checkout, isCheckingout };
}
