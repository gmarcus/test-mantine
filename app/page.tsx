import { Box, Button, Container, SegmentedControl } from "@mantine/core"
import { ImageActionBanner } from "../components/ImageActionBanner"

export default function HomePage() {
  return <>
    <Box bg={"red"}>
      <Container size="xl" maw={1440} bg={"gray"}>
        <h1>Home page</h1>
        <p>Hi Glenn</p>
        <Button variant="filled">Button</Button>
        <Box>
          <SegmentedControl w={"400"} data={['Learners', 'Instructors']} />
        </Box>
        <Container size={"xs"} mt={60}>
          <ImageActionBanner />
        </Container>
      </Container>    
    </Box>
  </>
}
