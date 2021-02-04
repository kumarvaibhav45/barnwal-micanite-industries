import { forwardRef } from 'react'
import SectionHeading from './heading'
import Product from './product'
import Link from 'next/link'

const Products = forwardRef(({ id }, ref) => {
  return (
    <div id={id} ref={ref} className='py-16'>
      <SectionHeading text='Our Products' />
      <div className='flex flex-col space-y-20 items-center mx-auto pt-10 w-5/6 lg:w-3/4'>
        <Product
          id='mica-slip-plane'
          name='Mica slip plane'
          img='/mica-sheets.jpeg'
        >
          <div>
            <p className='text-sm tracking-widest'>
              Mica P with Glass reinforcement - cold formable composite of
              Flexible mica paper with glass fiber reinforcement. Available in
              Muscovite and Phlogopite. This product is asbestos free and
              resists tearing. <br />
              <br /> Mica Combi - offers exceptional insulation performance and
              flexibility with excellent handling strength. Various thickness's
              readily available. <br />
              <br /> SinterFoil - Phlogopite Mica paper with glass reinforcement
              on both sides held together with a high temperature silicone
              resin. Mica P with Stainless Steel Insert-used as a sensor in
              coreless induction furnaces and as a ground leak detection
              product.
            </p>
            <section className='mt-8'>
              <h3 className='capitalize text-xl font-medium mb-3 text-center lg:text-left'>
                Uses & benefits
              </h3>
              <p className='text-sm tracking-widest'>
                The slip plane is positioned against the coil screed to provide
                a smooth surface. This is essential for uninhibited reversible
                movement of the refractory lining caused by its thermal
                expansion and contraction. It is a thin but extremely tough
                material, which allows the furnace lining to expand and contract
                while protecting it against any abrasive damage. The mica also
                offers a degree of protection against metal penetration. There
                are no health risks that come with its installation, removal or
                storage.
              </p>
            </section>
            <section className='mt-8'>
              <h3 className='capitalize text-xl font-medium mb-3 text-center lg:text-left'>
                Dimensions
              </h3>
              <p className='text-sm tracking-widest'>
                It is produced and available in rolls measuring 1 meter wide x
                30 meters long (39.37 in. x 98.42 ft) for easy storage and
                shipping.
              </p>
            </section>
          </div>
        </Product>
        <Product
          id='flexible-mica-sheet'
          name='Flexible mica sheet'
          img='/mica-sheet.jpg'
        >
          <div>
            <p className='text-sm tracking-widest'>
              This is a silicone bonded Mica laminate, made of varnish glass cloth, multiple layers of hand laid muscovite mica splittings and another layer of silicone varnished glass cloth. This material exhibits excellent flexibility and formability at room Temperatures.
              Mica sheets are the ideal alternative for asbestos insulations.
              They offer good resistance to high temperatures & chemicals, low
              heat conductivity, high dielectric strength, good high-voltage
              proof performance.
            </p>
            <section className='mt-8'>
              <h3 className='capitalize text-xl font-medium mb-3 text-center lg:text-left'>
                Uses & benefits
              </h3>
              <div className='text-sm tracking-widest'>
                Mica sheets are used for high-performance thermal and electrical
                insulation in a broad range of industries such as
                <ol className='list-inside mt-2 list-disc'>
                  <li>
                    heating elements for electrical & thermo mechanical
                    equipment
                  </li>
                  <li>
                    construction of induction, arc or high frequency furnaces
                  </li>
                  <li>high voltage applications</li>
                  <li>high thermal applications</li>
                  <li>
                    industrial sealing & gasket industries (e.g. oil & gas
                    distribution)
                  </li>
                </ol>
              </div>
            </section>
            <section className='mt-8'>
              <h3 className='capitalize text-xl font-medium mb-3 text-center lg:text-left'>
                Dimensions
              </h3>
              <p className='text-sm tracking-widest'>
                It is produced and available in rolls measuring 1 meter wide x
                30 meters long (39.37 in. x 98.42 ft) for easy storage and
                shipping.
              </p>
            </section>
          </div>
        </Product>
        <Product id='mica-tape' name='Mica tape' img='/mica-tape.jpeg'>
          <div>
            <p className='text-sm tracking-widest'>
              Mica Tape for fire-resistant cable is insulation material made of
              superior phlogopite mica paper, synthetic mica paper, calcined
              muscovite mica tape, impregnated with high-quality silicon resin
              and backed with reinforcing material, can resist high voltage and
              especially high temperature. Mica is beneficial in electrical
              insulation as it offers dielectric strength, electric
              conductivity, heat resistance, along with high shear and tensile
              strength.
            </p>
            <section className='mt-8'>
              <h3 className='capitalize text-xl font-medium mb-3 text-center lg:text-left'>
                Uses & benefits
              </h3>
              <p className='text-sm tracking-widest'>
                MICA TAPE is used as fire resistant layer between conductors and
                out sheath. They are suitable for all essential and emergency
                system, including power and control cable, that must maintain
                good property and function during and after a fire.
              </p>
            </section>
            <section className='mt-8'>
              <h3 className='capitalize text-xl font-medium mb-3 text-center lg:text-left'>
                Dimensions
              </h3>
              <p className='text-sm tracking-widest'>
                We offer a wide range of mica insulating materials for various
                applications in different types of large generators for
                industrial, hydro, turbo, wind and solar electrical energy
                creation.
              </p>
            </section>
          </div>
        </Product>
      </div>
      <div className='mx-auto mt-20 text-3xl font-medium tracking-wider capitalize flex flex-col justify-center items-center w-4/5 lg:w-full lg:text-4xl xl:text-5xl lg:flex-row'>
        <p className='text-center lg:text-left'>
          For detailed products related inquery:
        </p>
        <Link href='/#contact'>
          <a className='mt-4 border-2 border-s-darkblue text-xl px-5 py-3 uppercase hover:text-white hover:bg-s-blue hover:border-s-blue transition-colors duration-200 lg:ml-10'>
            Contact Us
          </a>
        </Link>
      </div>
    </div>
  )
})

export default Products
