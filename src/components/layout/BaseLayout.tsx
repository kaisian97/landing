import { PropsWithChildren } from 'react'
import Header from 'components/Header'

type Props = {}

const BaseLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <Header />
      <div className="p-2 pb-20 md:p-8 md:pb-0">{children}</div>
    </div>
  )
}

export default BaseLayout
