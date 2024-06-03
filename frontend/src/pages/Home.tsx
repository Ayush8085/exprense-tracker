import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">

      {/* SHOW ALL THE EXPENSES HERE */}
      <div className="flex justify-center items-center flex-col md:flex-row p-4 gap-4">
        {/* One expense */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Food</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>

          <CardContent>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              500
            </Button>
            <Button>Category</Button>
          </CardFooter>
        </Card>

        {/* One expense */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Food</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>

          <CardContent>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              500
            </Button>
            <Button>Category</Button>
          </CardFooter>
        </Card>

        {/* One expense */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Food</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>

          <CardContent>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              500
            </Button>
            <Button>Category</Button>
          </CardFooter>
        </Card>

        {/* One expense */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Food</CardTitle>
            <CardDescription>This is description</CardDescription>
          </CardHeader>

          <CardContent>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              500
            </Button>
            <Button>Category</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Home;