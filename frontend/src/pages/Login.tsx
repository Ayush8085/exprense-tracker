import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Login = () => {
    return (
        <div className="flex justify-center p-4 mt-20">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Continue to use this expense tracer🥹</CardDescription>
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input type="email" placeholder="Email" />
                                <Input type="password" placeholder="Password" />
                            </div>
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button variant="secondary">Signup</Button>
                    <Button>Login</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login