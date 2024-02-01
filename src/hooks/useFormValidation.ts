import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { HandleCloseCallPopup } from "./useCallPopupControl";

interface UseFormValidationProps {
  handleClose?: <T extends HandleCloseCallPopup>(e: T) => void;
  handleOpenSuccessPopup: () => void;
}

const useFormValidation = ({
  handleClose,
  handleOpenSuccessPopup,
}: UseFormValidationProps) => {
  const schema = z.object({
    name: z.string().min(2).max(30),
    phone: z.string().min(10),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms" }),
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({ resolver: zodResolver(schema) });

  const submitData: SubmitHandler<FormSchemaType> = (data, e) => {
    handleOpenSuccessPopup();
    reset();
    if (handleClose && e) {
      handleClose(e);
    }
  };

  return { register, handleSubmit, errors, isSubmitting, submitData };
};

export default useFormValidation;
