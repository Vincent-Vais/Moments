import React, { useState } from "react";
import {
  Modal,
  Button,
  Paper,
  Input,
  FormControl,
  InputLabel,
} from "@material-ui/core/";

const Auth = ({ classes, handleSubmit, handleSignOut, user }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [logInForm, setLogInForm] = useState({ email: "", password: "" });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clearForms = () => {
    setSignUpForm({
      email: "",
      password: "",
      username: "",
    });
    setLogInForm({ email: "", password: "" });
    handleClose();
  };

  return (
    <div>
      {user ? (
        <Button type="button" onClick={handleSignOut} className={classes.btn}>
          Sign Out
        </Button>
      ) : (
        <React.Fragment>
          <Button type="button" onClick={handleOpen} className={classes.btn}>
            Log In
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Paper className={classes.popper} elevation={3}>
              <form
                className={classes.popper__form}
                onSubmit={(event) =>
                  handleSubmit(event, signUpForm, "signup", clearForms)
                }
              >
                <h3 className={classes.popper__header}>Sign Up</h3>
                <div className={classes.popper__inputs}>
                  {Object.keys(signUpForm).map((item, idx) => (
                    <FormControl className={classes.popper__item} key={idx}>
                      <InputLabel
                        htmlFor={item}
                        className={classes.popper__input}
                      >
                        {item.toUpperCase()}
                      </InputLabel>
                      <Input
                        id={item}
                        name={item}
                        type={item !== "password" ? "text" : "password"}
                        value={signUpForm[item]}
                        className={classes.popper__input}
                        onChange={(event) =>
                          setSignUpForm({
                            ...signUpForm,
                            [event.target.name]: event.target.value,
                          })
                        }
                        required
                      />
                    </FormControl>
                  ))}
                </div>
                <Button
                  type="submit"
                  className={
                    hover ? classes.popper__btnPurple : classes.popper__btnWhite
                  }
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Submit
                </Button>
              </form>
              <form
                className={classes.popper__form}
                onSubmit={(event) =>
                  handleSubmit(event, logInForm, "login", clearForms)
                }
              >
                <h3 className={classes.popper__header}>Log in</h3>
                <div className={classes.popper__inputs}>
                  {Object.keys(logInForm).map((item, idx) => (
                    <FormControl className={classes.popper__item} key={item}>
                      <InputLabel
                        htmlFor={`${item}${idx}`}
                        className={classes.popper__input}
                      >
                        {item.toUpperCase()}
                      </InputLabel>
                      <Input
                        id={`${item}${idx}`}
                        name={item}
                        type={item !== "password" ? "text" : "password"}
                        value={logInForm[item]}
                        className={classes.popper__input}
                        onChange={(event) =>
                          setLogInForm({
                            ...logInForm,
                            [event.target.name]: event.target.value,
                          })
                        }
                        required
                      />
                    </FormControl>
                  ))}
                </div>
                <Button
                  type="submit"
                  className={
                    hover ? classes.popper__btnWhite : classes.popper__btnPurple
                  }
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Modal>
        </React.Fragment>
      )}
    </div>
  );
};

export default Auth;
