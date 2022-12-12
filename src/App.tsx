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
      <div className="flex flex-col md:flex-row text-center md:text-left">
        <div className="block md:hidden">
          <img src={HeroMobile} alt="hero" />
        </div>
        <div className="md:mx-36 mt-12 md:mt-28 space-y-6 md:space-y-12 flex-1.5">
          <h1 className="font-bold whitespace-nowrap md:whitespace-pre-line text-4xl md:text-7xl">
            Make{'\n'}remote work
          </h1>
          <div className="text-mediumGray md:whitespace-pre-line md:w-[450px]">
            <p className="text-[17px] leading-7">
              Get your team in sync, no matter your location.{'\n'}Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <Button className="mx-auto" variant="fill">
            Learn more
          </Button>
          <div className="flex space-x-6 md:space-x-8 pt-8">
            {clients.map((client, idx) => (
              <div key={idx} className="flex-1 md:flex-0 md:w-20">
                {client.image}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 hidden xl:block">
          <img
            src={Hero}
            alt="hero"
            width="620px"
            height="0px"
            className="max-h-[550px] object-contain"
          />
        </div>
      </div>
    </BaseLayout>
  )
}

export default App
