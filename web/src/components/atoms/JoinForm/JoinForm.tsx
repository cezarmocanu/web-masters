import React, { FC, memo } from "react";
import styles from "./JoinForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  isAgreeingTC: boolean;
}

const JoinForm: FC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formControl}>
        <label>
          <div className={styles.inputContainer}>
            <input
              {...(register("email"),
              { placeholder: "E-mail...", required: true })}
              className={styles.emailInput}
            />
            <button type="submit" className={styles.button}>
              Înscrie-te
            </button>
          </div>
        </label>
        {errors.email && (
          <span className={styles.error}>Introduce-ti un email valid</span>
        )}
      </div>

      <div className={styles.formControl}>
        <label className="control control-checkbox">
          Sunt de acord cu{" "}
          <a href="/terms-and-conditions">Termenii si conditiile</a>
          <input
            {...register("isAgreeingTC", { required: true })}
            className={styles.agreeInput}
            type="checkbox"
          />
          <div className="control_indicator"></div>
        </label>
        {errors.isAgreeingTC && (
          <span className={styles.error}>
            Trebuie sa acceptati termenii si conditiile
          </span>
        )}
      </div>
    </form>
  );
});

export default JoinForm;
