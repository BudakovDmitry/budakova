'use client'

import { Spacer, Input, Card, Checkbox, Button, Text } from "@nextui-org/react";
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
                        {/* <Text h2 css={{ textAlign: 'center' }}>Login</Text> */}
                        <Spacer y={1.5} />
                        <Input 
                            labelPlaceholder="Login" 
                            clearable
                            contentRight={<UserIcon />} 
                        />
                        <Spacer y={1.5} />
                        <Input.Password labelPlaceholder="Password" initialValue="" clearable />
                        <Spacer y={1} />
                        <Checkbox color="primary" size="sm">
                            Primary
                        </Checkbox>
                        <Spacer y={1} />
                        <Button shadow color="warning" auto>
                            Sign In
                        </Button>
                        <Spacer y={1.5} />
                        <p className={styles.login__divider}>or</p>
                        <Spacer y={1.5} />
                        <Button bordered color="warning" auto>
                            Register
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </> 
    );
}
 
export default Login;