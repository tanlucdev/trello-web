import ScrollToTop from '~/components/Arrow/ScrollToTop'
import Achieve from '~/pages/Single_Page/Achieve'
import Faq from '~/pages/Single_Page/Faq'
import Guide from '~/pages/Single_Page/Guide'
import Whouse from '~/pages/Single_Page/WhoUse'

export default function Information() {
  return (
    <div style={{ scrollSnapType: 'y mandatory', overflowY: 'auto' }}>
      <section style={{ scrollSnapAlign: 'start', minHeight: '90vh' }}>
        <Guide />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '80vh' }}>
        <Achieve />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
        <Whouse />
      </section>
      <section style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
        <Faq />
      </section>
      <ScrollToTop showBelow={250} />
    </div>
  )
}