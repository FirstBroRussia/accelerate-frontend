import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import FitFriendsSvg from "../svg/Fitfriends.svg";
import { RoutePathEnum } from "../../common/enum/route-path.enum";
import React, { useCallback, useRef } from "react";
import { LoginRequestType } from "../../common/type/request/login-request.type";
import { asyncLoginAction } from "../../store/async-action/async-action";

export default function SignIn() {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(state => state.Common.isAuth);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const onLoginFormSubmitHandler: React.FormEventHandler<HTMLFormElement> = useCallback((evt) => {
    evt.preventDefault();

    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    const dto: LoginRequestType = {
      email: email,
      password: password,
    };

    dispatch(asyncLoginAction(dto));
  }, []);



  if (isAuth) {
    return <Navigate to={RoutePathEnum.Main} />
  }

  return (
    <>
      <div className="visually-hidden">
        <FitFriendsSvg />
      </div>
      <div className="wrapper">
        <main>
          <div className="background-logo">
            <svg className="background-logo__logo" width={750} height={284} aria-hidden="true">
              <use xlinkHref="#logo-big" />
            </svg>
            <svg className="background-logo__icon" width={343} height={343} aria-hidden="true">
              <use xlinkHref="#icon-logotype" />
            </svg>
          </div>
          <div className="popup-form popup-form--sign-in">
            <div className="popup-form__wrapper">
              <div className="popup-form__content">
                <div className="popup-form__title-wrapper">
                  <h1 className="popup-form__title">Вход</h1>
                </div>
                <div className="popup-form__form">
                  <form method="get" onSubmit={onLoginFormSubmitHandler}>
                    <div className="sign-in">
                      <div className="custom-input sign-in__input">
                        <label><span className="custom-input__label">E-mail</span><span className="custom-input__wrapper">
                            <input type="email" name="email" ref={emailInputRef} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Введен невалидный email" required /></span>
                        </label>
                      </div>
                      <div className="custom-input sign-in__input">
                        <label><span className="custom-input__label">Пароль</span><span className="custom-input__wrapper">
                            <input type="password" name="password" ref={passwordInputRef} minLength={8} maxLength={12} required /></span>
                        </label>
                      </div>
                      <button className="btn sign-in__button" type="submit">Продолжить</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

