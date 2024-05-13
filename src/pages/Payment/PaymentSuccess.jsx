import NavigationButton from "@/components/NavigationButton";
import PaymentSuccessImg from "@/assets/payment-success.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const PaymentSuccess = ({ triggerBtn }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerBtn}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription classname="mx-auto">
            <img
              src={PaymentSuccessImg}
              alt="Payment Success Img"
              className="h-60 w-64 mx-auto mb-4"
            />
          </AlertDialogDescription>
          <span className="max-w-sm text-center mx-auto text-muted-foreground text-lg">
            Payment successfully processed. Your order is confirmed and
            underway. Thank you!
          </span>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full">
            <NavigationButton className="w-full" to="/">
              Back To Home
            </NavigationButton>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentSuccess;
