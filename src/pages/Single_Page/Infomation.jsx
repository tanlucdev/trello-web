import Text from '~/components/Part/Text'
import Guide from '~/pages/Single_Page/Guide'
import Achieve from '~/pages/Single_Page/Achieve'
import Whouse from '~/pages/Single_Page/WhoUse'

export default function Gen() {
  return (
    <div style={{ scrollSnapType: 'y mandatory' }}>
      <section style={{ scrollSnapAlign: 'start' }}>
        <Guide />
      </section>
      <section style={{ scrollSnapAlign: 'start' }}>
        <Achieve />
      </section>
      <section style={{ scrollSnapAlign: 'start' }}>
        <Whouse />
      </section>
    </div>
  )
}