'use client'

import { Spacer, Input, Card, Button } from "@nextui-org/react";
import { UserIcon } from "./UserIcon";
import styles from '@/styles/login.module.scss'

const Login = () => {
    return ( 
        <>
            <div className={styles.login}>
                <Card isHoverable css={{ mw: "400px", m: '0 auto', p: '0 30px 30px' }}>
                    <Card.Body css={{ overflowY: 'initial' }}>
                        <div className={styles.login__logo}>
                            <div className={styles.login__logo_box}></div>
                            <div className={styles.login__logo_hill}></div>
                        </div>
                        <Spacer y={1.5} />
                        <Input 
                            labelPlaceholder="Ім'я" 
                            clearable
                            contentRight={<UserIcon />} 
                        />
                        <Spacer y={1.5} />
                        <Input.Password labelPlaceholder="Пароль" initialValue="" clearable />
                        <Spacer y={1} />
                        <Button shadow color="warning" auto>
                            Вхід
                        </Button>
                        <Spacer y={1.5} />
                        <p className={styles.login__divider}>або</p>
                        <Spacer y={1.5} />
                        <Button bordered color="warning" auto>
                            Зареєструватись
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </> 
    );
}
 
export default Login;