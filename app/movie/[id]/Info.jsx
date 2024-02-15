import Description from "./(info)/Description"
import Header from "./(info)/Header"
import Images from "./(info)/Images"
import Misc from "./(info)/Misc"
import People from "./(info)/People"

export default () => (
    <section className="bg-vibrant-dark-blue">
        <Images />
        <Header />
        <Misc />
        <Description />
        <People />
    </section>
)