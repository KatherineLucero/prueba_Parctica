import React from 'react'
import styles from './Login.module.css'

export const Login = () => {
    return (
        <>
            <div className={styles.Login_page}>
                <section className={styles.left_form}>
                    <img src="https://res.cloudinary.com/daxb153z0/image/upload/v1737082834/Katherine%20Mendez/fz9w1emhulb9ztiwmswk.jpg" alt="imagen de portada" />
                </section>

                <section className={styles.rigth_form}>
                    <div className={styles.login_form_registration}>Not A member? 
                        <a href="#"> Register now</a></div>
                    <h1>Hello Again!</h1>
                    <p>Welcome back you've been missed!</p>
                    <form className={styles.Login_form}>
                        <input type="text" placeholder="Enter username" />
                        <input type="password" placeholder="Password" />
                        <div className={styles.login_form_recovery}>
                            <a href="#">Recovery Password</a>
                        </div>
                        <button type="submit" className={styles.Login_buttom}> Sign In</button>
                        <p>Or continue with</p>

                        <div className={styles.Login_img_social}>
                            <button><img src="https://res.cloudinary.com/daxb153z0/image/upload/v1737086247/Katherine%20Mendez/qea3gbdcmqpyhzxupiv9.png" alt="Google" /> </button>
                            <button> <img src="https://res.cloudinary.com/daxb153z0/image/upload/v1737083522/Katherine%20Mendez/inc8mvgwjurwuvriqpoq.png" alt="Apple" /></button>
                            <button><img src="https://res.cloudinary.com/daxb153z0/image/upload/v1737086100/Katherine%20Mendez/u64fxc2akj3rywvaepuy.png" alt="facebook" /></button>
                        </div>

                    </form>

                </section>
            </div>
        </>
    )
}
