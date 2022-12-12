import { Button } from 'components/common'
import BaseLayout from 'components/layout/BaseLayout'
import Hero from 'assets/images/image-hero-desktop.png'
import HeroMobile from 'assets/images/image-hero-mobile.png'
import ClientDatabizIcon from 'assets/clients/ClientDatabizIcon'
import ClientAudiophileIcon from 'assets/clients/ClientAudiophileIcon'
import ClientMeetIcon from 'assets/clients/ClientMeetIcon'
import ClientMakerIcon from 'assets/clients/ClientMakerIcon'

function App() {
  const clients = [
    { image: <ClientDatabizIcon />, name: 'Databiz' },
    { image: <ClientAudiophileIcon />, name: 'Audiophile' },
    { image: <ClientMeetIcon />, name: 'Meet' },
    { image: <ClientMakerIcon />, name: 'Maker' },
  ]
  return (
    <BaseLayout>
      <div className="flex flex-col text-center md:flex-row lg:text-left">
        <div className="block md:hidden">
          <img src={HeroMobile} alt="hero" />
        </div>
        <div className="md:mt-18 flex-1.5 lg:flex-1.5 mt-12 space-y-6 md:mx-28 md:flex-1 md:space-y-12 lg:mx-8 xl:mx-36">
          <h1 className="whitespace-nowrap text-4xl font-bold md:whitespace-pre-line md:text-7xl">
            Make{'\n'}remote work
          </h1>
          <div className="text-mediumGray md:whitespace-pre-line lg:w-[450px]">
            <p className="text-[17px] leading-7">
              Get your team in sync, no matter your location.{'\n'}Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <Button className="mx-auto" variant="fill">
            Learn more
          </Button>
          <div className="flex space-x-6 pt-8 md:space-x-8">
            {clients.map((client, idx) => (
              <div key={idx} className="flex-1.5 lg:flex-0">
                {client.image}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden flex-1 lg:block">
          <img
            src={Hero}
            alt="hero"
            width="620px"
            className="max-h-[550px] object-contain"
          />
        </div>
      </div>
    </BaseLayout>
  )
}

export default App
