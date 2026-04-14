// Data layer — all content sourced from content.json and company_info.json

export const companyInfo = {
  name: 'Locksmith Luz',
  type: 'Locksmith Services',
  location: 'Los Angeles, CA',
  city: 'Los Angeles',
  state: 'CA',
  stateFull: 'California',
  phone: '(555) 748-2963',
  email: 'info@locksmithluz.com',
  tagline: 'Secure every door. Protect every home. Trusted locksmith services across California.',
  yearEstablished: '2011',
  certifications: ['Licensed', 'Insured', 'Bonded', 'ALOA Certified'],
  address: 'Serving all of Los Angeles, CA and surrounding areas',
  hours: 'Mon-Sun: 7am-10pm | Emergency: 24/7',
  footerTagline: 'Proudly serving Los Angeles and all of California with fast, certified locksmith services.',
};

export interface Service {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'emergency-lockout-service',
    name: 'Emergency Lockout Service',
    icon: 'Zap',
    shortDescription: 'Locked out of your home, office, or car in California? Locksmith Luz dispatches a certified technician 24 hours a day with an average arrival time under 20 minutes. No damage, no drama.',
    fullDescription: [
      'Being locked out is stressful, and it almost never happens at a convenient time. Locksmith Luz operates around the clock across Los Angeles and the broader California service area, so whether it is 2 in the afternoon or 2 in the morning, a real dispatcher answers your call and gets a technician rolling within minutes. We do not outsource our emergency calls to a third-party service.',
      'Our technicians carry a full set of professional lock picks, bypass tools, and slim-profile entry equipment that allows them to open most residential and commercial doors without any damage to the door frame or lock hardware. For high-security deadbolts and bump-proof locks, we use manufacturer-approved entry methods to preserve the lock so you can continue using it after we leave.',
      'Once we have you back inside, we do a quick security check on the lock that kept you out and give you an honest assessment of whether it should be rekeyed, repaired, or replaced. There is no obligation to do any additional work, but most customers appreciate knowing the condition of their hardware. Locksmith Luz emergency service is available throughout California, with the fastest response times in the Los Angeles metro area.',
    ],
    features: [
      '24/7 dispatch with live phone support, no automated menus',
      'Average arrival time under 20 minutes in the Los Angeles area',
      'Non-destructive entry on most residential and commercial locks',
      'Automotive lockout service for all makes and models',
      'Post-entry security assessment at no extra charge',
      'Upfront pricing quoted over the phone before dispatch',
    ],
    faq: [
      { question: 'How fast can you arrive for an emergency lockout in Los Angeles?', answer: 'Our average response time in the Los Angeles metro area is under 20 minutes. Response times to other California cities vary, but we dispatch immediately on every call and keep you updated with an ETA from your technician.' },
      { question: 'Will you damage my door or lock when opening it?', answer: 'In the vast majority of lockout cases, we can open the door without any damage to the lock or frame using professional non-destructive entry tools. If a lock is damaged before we arrive and drilling is necessary, we will tell you before we start and get your approval first.' },
      { question: 'Do you charge more for after-hours emergency calls?', answer: 'We have a straightforward pricing structure that we quote over the phone before we dispatch. After-hours rates are clearly stated upfront so there are no surprises on the invoice.' },
    ],
  },
  {
    slug: 'residential-lock-installation',
    name: 'Residential Lock Installation',
    icon: 'Home',
    shortDescription: 'Upgrade or replace the locks on your California home with hardware that actually fits your security needs. Locksmith Luz installs deadbolts, knob sets, smart locks, and high-security systems with a 90-day workmanship guarantee.',
    fullDescription: [
      'A lock is only as good as its installation. Locksmith Luz installs residential lock hardware from Grade 1 deadbolts to smart keypad entry systems, ensuring every component is properly aligned, the strike plate is reinforced, and the deadbolt throw extends the full inch required for solid security. We carry hardware from trusted brands including Schlage, Kwikset, Medeco, and Yale.',
      'The installation process starts with a quick measurement of your door and frame to confirm the bore hole size and backset distance. We then walk you through hardware options that fit your door, your neighborhood\'s security needs, and your budget. Installation typically takes 30 to 45 minutes per lock, and we always test the lock with all provided keys before we pack up.',
      'California homes range from 1920s craftsman bungalows to modern high-rises, and each comes with its own door and frame conditions. Our technicians are experienced working with hollow-core interior doors, solid-core exterior doors, steel security doors, and everything in between. Locksmith Luz residential installation service is available throughout the Los Angeles area and across California.',
    ],
    features: [
      'Grade 1 and Grade 2 deadbolt installation for front and back doors',
      'Reinforced strike plate and door frame anchoring included',
      'Smart lock and keypad installation with app setup assistance',
      'Compatibility check for existing bore holes and backset dimensions',
      'Matching hardware sets for consistent style throughout the home',
      '90-day workmanship guarantee on all installed hardware',
    ],
    faq: [
      { question: 'What brands of locks do you install?', answer: 'We work with all major residential lock brands including Schlage, Kwikset, Medeco, Yale, and August. We can also install hardware you purchase yourself, or we can supply the hardware directly at competitive prices.' },
      { question: 'How long does a residential lock installation take?', answer: 'A standard deadbolt installation on an existing bore hole takes approximately 30 minutes. If we are cutting a new bore hole, adding a reinforced strike plate, or installing a multi-point locking system, the job may take 60 to 90 minutes.' },
      { question: 'Do I need to replace my door to install a better lock?', answer: 'In almost all cases, no. We can upgrade the lock hardware and reinforce the strike plate on your existing door to significantly improve security without any door replacement. We will assess your door on-site and give you an honest recommendation.' },
    ],
  },
  {
    slug: 'rekeying-services',
    name: 'Rekeying Services',
    icon: 'Key',
    shortDescription: 'Moving into a new home? Just ended a lease? Rekeying changes the internal pins of your existing lock so old keys no longer work, giving you full security control without buying new hardware.',
    fullDescription: [
      'Rekeying is one of the smartest and most cost-effective security moves you can make. When the internal pins of a lock are rekeyed, every previously cut key for that lock becomes useless. This is the fastest way to secure a new home, reset access after a breakup or roommate change, or respond to a lost key situation, all without replacing hardware you may have paid good money for.',
      'Locksmith Luz technicians carry pin kits for all major lock brands and can rekey most residential locks in 15 to 20 minutes per cylinder. If you have multiple locks in the home, we can key them all alike so one key opens every door. We cut the new keys on-site using our mobile key-cutting equipment, and we test every key in every lock before we leave.',
      'Rekeying is particularly popular with new homeowners across California. When you purchase a home, you rarely know how many copies of the previous key are floating around. A same-day rekeying service from Locksmith Luz is typically far less expensive than replacing all your deadbolts, and the security result is identical.',
    ],
    features: [
      'On-site rekeying for all major lock brands without removing the door hardware',
      'Key-alike service to use one key for all exterior doors',
      'New keys cut on-site with mobile key-cutting equipment',
      'Same-day service available throughout the Los Angeles area',
      'Ideal for new homeowners, landlords, and property managers',
      'More affordable than full lock replacement with equivalent security results',
    ],
    faq: [
      { question: 'How is rekeying different from replacing a lock?', answer: 'Rekeying changes the internal pin configuration of your existing lock cylinder so that old keys no longer work. The hardware and appearance of the lock stay the same. Replacing a lock means installing entirely new hardware. Rekeying costs less and achieves the same security goal when the existing hardware is in good condition.' },
      { question: 'Can all my locks be keyed to work with a single key?', answer: 'Yes. If you have multiple locks of the same brand, we can rekey them to a common key code so you carry one key for the front door, back door, and side gate. We verify compatibility on-site before starting.' },
      { question: 'How soon can you rekey my new home?', answer: 'We offer same-day rekeying service throughout our California service area. Many new homeowners call us the day they receive their keys, and we can often arrive within a few hours of your call.' },
    ],
  },
  {
    slug: 'automotive-locksmith',
    name: 'Automotive Locksmith',
    icon: 'Key',
    shortDescription: 'Lost your car key, locked it inside, or need a transponder key programmed? Locksmith Luz handles automotive lockouts, key cutting, and key fob programming for most makes and models across California.',
    fullDescription: [
      'Modern vehicle keys are far more complex than the simple metal keys of the past. Today\'s cars use laser-cut high-security keys, transponder chips, proximity fobs, and push-button start systems that all require specialized equipment to duplicate or replace. Locksmith Luz invests in the latest automotive key programming hardware so we can serve most vehicles without requiring a dealership trip that can cost two to three times as much.',
      'Our mobile units carry key cutting machines capable of handling standard, laser-cut, and high-security automotive blanks, along with diagnostic programming tools compatible with most domestic, European, and Asian vehicle makes. Whether you need a spare key for a 2010 Honda Accord or a replacement proximity key for a 2023 BMW, we can assess your vehicle on-site and give you an immediate quote.',
      'Auto lockout service is available 24 hours a day throughout California. We use wedge and air bag entry tools that open car doors without scratching the paint or damaging the weather seal. Locksmith Luz automotive service also covers ignition repairs, trunk lockouts, and broken key extractions.',
    ],
    features: [
      'Car lockout service with non-damaging entry tools, available 24/7',
      'Transponder key cutting and programming for most makes and models',
      'Key fob battery replacement and remote programming',
      'Push-button start proximity key replacement',
      'Broken key extraction from door locks and ignitions',
      'Ignition repair and cylinder replacement',
    ],
    faq: [
      { question: 'Can you make a car key without the original?', answer: 'In most cases, yes. Using your vehicle identification number and proof of ownership, we can cut and program a new key even when no original key exists. Some high-security and luxury vehicles require dealer-only programming, and we will tell you upfront if that is the case for your car.' },
      { question: 'Is using a locksmith cheaper than the dealership for a car key?', answer: 'Typically yes, often significantly so. Dealerships charge for parts, programming labor, and service fees that add up quickly. Locksmith Luz provides upfront pricing and comes to you, saving you a tow as well.' },
      { question: 'What do I need to provide for a car key replacement?', answer: 'We will need your vehicle identification number, proof of ownership such as the title or registration, and a valid photo ID. This verification protects you and ensures we are only cutting keys for the rightful owner.' },
    ],
  },
  {
    slug: 'commercial-lock-security',
    name: 'Commercial Lock and Security',
    icon: 'Building',
    shortDescription: 'From retail storefronts in Hollywood to office buildings in Downtown Los Angeles, Locksmith Luz designs and installs commercial lock systems that balance security with daily operational flow.',
    fullDescription: [
      'Commercial security has demands that residential locks are not built to handle. Employee turnover, shift access control, ADA compliance requirements, and high-traffic door wear all factor into the right choice of commercial hardware. Locksmith Luz works with business owners, property managers, and building engineers across California to design systems that address these realities from day one.',
      'We install and service commercial-grade cylindrical and mortise locksets, panic hardware and exit devices, electric strike systems, access control keypads, and master key hierarchies that give management and employees the right level of access without sharing a single key. Our team is familiar with California building codes for exit hardware and can help ensure your business is compliant.',
      'Commercial rekeying is also a core service for California businesses. When an employee with key access leaves the company, a quick rekey eliminates the risk without replacing expensive commercial hardware. Locksmith Luz offers priority scheduling for commercial clients and can service most businesses outside of operating hours to minimize disruption.',
    ],
    features: [
      'Commercial-grade deadbolt, mortise, and cylindrical lockset installation',
      'Panic bar and ADA-compliant exit device installation',
      'Master key system design for multi-tenant buildings and offices',
      'Electric strike and access control keypad integration',
      'After-hours commercial lockout service available 24/7',
      'Employee transition rekeying with same-day scheduling',
    ],
    faq: [
      { question: 'Can you design a master key system for my building?', answer: 'Yes. We design master key hierarchies from scratch, taking into account tenant access levels, management access, and emergency access requirements. We document the entire system and provide a copy to the building owner for secure record-keeping.' },
      { question: 'Do you service commercial properties outside of business hours?', answer: 'Absolutely. Many of our commercial clients prefer scheduling lock work during off-hours to avoid disrupting customers or employees. We accommodate early morning, evening, and weekend appointments across our California service area.' },
      { question: 'How do I handle lock security when an employee with building access leaves?', answer: 'The fastest solution is rekeying the locks that employee could access. We can typically schedule a commercial rekey within 24 hours and will rekey only the relevant cylinders rather than the entire building unless a full reset is needed.' },
    ],
  },
  {
    slug: 'smart-lock-installation',
    name: 'Smart Lock Installation',
    icon: 'Plug',
    shortDescription: 'Smart locks let you control who enters your home or business from anywhere in California using your phone. Locksmith Luz installs and configures smart locks from top brands including Yale, Schlage Encode, and August Pro.',
    fullDescription: [
      'Smart locks have moved from novelty to necessity for California homeowners and property managers who need flexible, trackable access without cutting dozens of keys. Whether you want to let a contractor in while you are at work, give your kids their own door code, or track when your rental property is accessed, a properly installed and configured smart lock makes it possible from your phone.',
      'Locksmith Luz installs smart locks from Yale, Schlage, August, Kwikset Halo, and other leading brands. We handle the full job: removing your existing deadbolt, confirming door prep compatibility, mounting the new hardware, connecting it to your home Wi-Fi or hub, and walking you through the app setup so you understand how to manage codes and access logs. We do not consider the job done until you have successfully added and deleted a code yourself.',
      'Many California homeowners are surprised to learn that smart lock installation is no more difficult than a standard deadbolt replacement when done by a professional. The added step is the connectivity configuration, which is where Locksmith Luz adds real value. We have installed hundreds of smart locks across Los Angeles and greater California and troubleshoot compatibility issues on the spot.',
    ],
    features: [
      'Installation of Wi-Fi, Z-Wave, Zigbee, and Bluetooth smart locks',
      'App setup and user code configuration included with every installation',
      'Compatibility check with existing door prep and smart home hubs',
      'Integration assistance with Google Home, Amazon Alexa, and Apple HomeKit',
      'Backup key cylinder retained for power outage and connectivity loss scenarios',
      'Rental property access management setup for property managers',
    ],
    faq: [
      { question: 'What happens if the smart lock battery dies or Wi-Fi goes down?', answer: 'Most smart locks we install include a physical key cylinder as a backup. We always retain and test this backup during installation. Some models also allow a 9-volt battery to be touched to external contacts for emergency entry.' },
      { question: 'Can you install a smart lock on a door that already has a deadbolt?', answer: 'In most cases, yes. Standard bore hole dimensions are compatible with most smart lock brands. We confirm the backset measurement and door thickness before starting to ensure a clean fit.' },
      { question: 'Which smart lock brand do you recommend?', answer: 'The right brand depends on your smart home ecosystem and security needs. Schlage Encode is our top pick for straightforward Wi-Fi use. August Pro is ideal if you want to keep your existing deadbolt with a retrofit adapter. We walk through your specific setup before recommending hardware.' },
    ],
  },
  {
    slug: 'high-security-lock-upgrade',
    name: 'High-Security Lock Upgrade',
    icon: 'ShieldCheck',
    shortDescription: 'Standard deadbolts can be picked, bumped, or drilled in seconds. High-security locks from brands like Medeco and Mul-T-Lock resist all three attack methods and feature restricted keyways so unauthorized copies cannot be made.',
    fullDescription: [
      'Most residential and commercial locks sold at hardware stores are rated for convenience, not serious security. A standard pin tumbler lock can be bumped open in under 10 seconds by someone with a two-dollar bump key. High-security locks are engineered to defeat bump attacks, picking, drilling, and unauthorized key duplication through patented keyway designs, hardened steel inserts, and complex internal mechanisms that exceed industry security ratings.',
      'Locksmith Luz installs high-security locks from Medeco, Mul-T-Lock, ASSA Abloy, and Abloy, brands whose products are ANSI Grade 1 certified and specified by government buildings, banks, and high-end residential projects across California. These locks come with patented key control, meaning new keys can only be cut by an authorized dealer like Locksmith Luz using your registered key card, not at any hardware store kiosk.',
      'A high-security upgrade is particularly valuable for California properties with repeated break-in attempts, vacation rentals that need controlled key access, or commercial spaces with sensitive inventory. Locksmith Luz performs a security assessment before recommending specific hardware so you invest only in the protection level your property actually needs.',
    ],
    features: [
      'Medeco, Mul-T-Lock, and Abloy high-security deadbolt installation',
      'Bump-resistant, pick-resistant, and drill-resistant certified hardware',
      'Patented key control: new keys only cut with your registered key card',
      'Reinforced strike plates with 3-inch screws anchored into the stud',
      'Security assessment included before any hardware recommendation',
      'Available for residential front doors, commercial entries, and apartment buildings',
    ],
    faq: [
      { question: 'Are high-security locks really harder to pick than standard locks?', answer: 'Yes. High-security locks from brands like Medeco use sidebar mechanisms and offset pins that require simultaneous manipulation in multiple dimensions. This makes picking extremely time-consuming even for skilled locksmiths, and practically impossible in a casual attack scenario.' },
      { question: 'Can I get copies of high-security keys made at the hardware store?', answer: 'No, and that is intentional. High-security keys use patented keyway profiles that require factory-specific key blanks. Copies can only be made by an authorized dealer, and we require your registered key card for every duplication. This prevents anyone from making an unauthorized copy even if they have your key in hand.' },
      { question: 'How much more does a high-security lock cost compared to a standard deadbolt?', answer: 'High-security lock hardware typically costs 3 to 5 times more than a standard deadbolt, and installation is slightly more involved. For most customers who request these upgrades, the investment is justified by the significant improvement in forced-entry resistance and key control.' },
    ],
  },
  {
    slug: 'safe-installation-and-opening',
    name: 'Safe Installation and Opening',
    icon: 'Lock',
    shortDescription: 'Locked out of your home safe or gun safe? Need a new floor or wall safe professionally anchored in your California home or business? Locksmith Luz handles safe openings, combinations changes, and new installations.',
    fullDescription: [
      'A safe that cannot be opened is just as useless as one that was never purchased. Whether you inherited a safe with an unknown combination, forgot your code after a long vacation, or need a damaged locking mechanism repaired, Locksmith Luz has the tools and training to open most residential and commercial safes without destroying them. We work on combination dial safes, electronic keypad safes, biometric safes, and high-security fire safes.',
      'Safe opening techniques depend on the brand, model, and condition of the safe. We begin with non-destructive methods such as manipulation and scoping wherever possible. Drilling is used only when no other approach is viable, and in most cases we can repair or replace the locking mechanism after a drill entry so the safe remains fully functional. We will always describe the process and get your approval before proceeding.',
      'New safe installation is another common request from California homeowners and businesses looking to secure firearms, important documents, jewelry, or cash. Locksmith Luz anchors safes into concrete, wood subfloor, and wall framing to prevent removal. We also help you choose the right fire rating and capacity for your needs before purchasing.',
    ],
    features: [
      'Non-destructive safe opening using manipulation and scoping techniques',
      'Electronic keypad and combination dial safe opening',
      'Combination changes and lock mechanism repair after opening',
      'Floor safe and wall safe installation anchored to structure',
      'Fire-rated safe selection guidance and installation',
      'Gun safe installation and biometric safe servicing',
    ],
    faq: [
      { question: 'Can you open my safe without destroying it?', answer: 'In most cases, yes. We always attempt non-destructive methods first, including combination manipulation and fiber-optic scoping. If drilling is required, we let you know beforehand and can usually restore the safe to working order by replacing the locking mechanism.' },
      { question: 'How do I reset the combination on my safe after opening?', answer: 'After opening, we can change the combination to a new number you provide, set up a new electronic access code, or install a replacement dial mechanism. We document the new combination for you and recommend storing a copy in a secure off-site location.' },
      { question: 'Where is the best place to install a floor safe in a California home?', answer: 'Common locations include closet floors, under a home office desk, or beneath a fixed piece of furniture. We assess your subfloor material and recommend anchoring methods that provide maximum pull resistance. Garages and laundry rooms are generally not recommended due to moisture and visibility.' },
    ],
  },
  {
    slug: 'lock-repair-and-maintenance',
    name: 'Lock Repair and Maintenance',
    icon: 'Wrench',
    shortDescription: 'A stiff deadbolt, a sticky latch, or a lock that grinds when you turn the key are early signs of a hardware problem. Locksmith Luz diagnoses and repairs residential and commercial locks before a small issue becomes a lockout.',
    fullDescription: [
      'Locks wear out over time, especially on exterior doors that are used dozens of times each day. The most common complaints we hear are a deadbolt that requires extra force to throw, a key that sticks or feels rough in the keyway, a lever handle that has developed play or wobble, and a latch that no longer catches cleanly against the strike plate. Each of these symptoms points to a specific component failure that can usually be repaired without full replacement.',
      'Locksmith Luz technicians diagnose lock problems by disassembling the cylinder or mechanism, inspecting the individual pins, springs, cam, and tailpiece for wear or damage, and cleaning out debris and old lubricant that degrades performance. Many repairs take under 30 minutes and restore the lock to smooth, reliable operation for years of additional service.',
      'Preventive maintenance is also available for property managers and homeowners who want to service their lock hardware on a schedule rather than waiting for a failure. Locksmith Luz offers maintenance visits for multi-unit California properties that include cleaning, lubrication, and a written condition report for each lock on the property.',
    ],
    features: [
      'Diagnosis and repair of stiff, sticking, or grinding deadbolts and latches',
      'Cylinder cleaning and lubrication with professional-grade graphite or Teflon lubricant',
      'Strike plate adjustment and realignment for doors that have settled or warped',
      'Broken key extraction from door locks and padlocks',
      'Spring and pin replacement inside lock cylinders',
      'Preventive maintenance programs available for multi-unit properties',
    ],
    faq: [
      { question: 'Can I use WD-40 to fix a stiff lock?', answer: 'WD-40 is a solvent, not a lubricant, and it will actually accelerate wear inside a lock cylinder by washing away the factory lubricant and leaving residue that attracts dirt. We use dry graphite or Teflon-based lubricants that work with the lock\'s internal components rather than against them.' },
      { question: 'My key broke off inside the lock. Can you remove it without replacing the lock?', answer: 'In most cases, yes. We use extractor hooks and spiral extractors to remove broken key fragments from lock cylinders without disassembling the lock from the door. After extraction, we inspect the cylinder for damage and cut you a new key on-site.' },
      { question: 'How often should residential locks be serviced?', answer: 'For most California homes, a light cleaning and lubrication every 2 to 3 years is sufficient. High-traffic commercial doors benefit from annual service. If you notice any change in how smoothly the key turns or the bolt extends, schedule a repair rather than waiting for the annual cycle.' },
    ],
  },
  {
    slug: 'master-key-systems',
    name: 'Master Key Systems',
    icon: 'Layers',
    shortDescription: 'Master key systems let you carry one key that opens every door while giving tenants, staff, or family members access only to the doors they need. Locksmith Luz designs and installs master key hierarchies for California apartments, offices, and commercial buildings.',
    fullDescription: [
      'A master key system is the most elegant solution to the access control problem in any building with multiple units or departments. Instead of carrying a ring of keys or issuing full building access to everyone, a properly designed master key hierarchy assigns each person a sub-master or change key that opens only their specific doors, while management retains a single master key that operates every lock in the system.',
      'Locksmith Luz designs master key systems for California apartment buildings, office parks, schools, healthcare facilities, and retail centers. We start by mapping your access requirements: who needs to open what, which doors require grand master access, and whether any doors need to remain off the master system entirely. We then specify the hardware and key blanks, pin the cylinders to the exact specification, and produce the key set at our shop.',
      'Every master key system we create is fully documented and registered to the building owner. Copies of master keys and grand master keys can only be produced through Locksmith Luz using the registered key card, preventing unauthorized key duplication. We also provide expansion instructions so new locks can be added to the system as the building grows.',
    ],
    features: [
      'Custom master key hierarchy design for apartments, offices, and commercial buildings',
      'Grand master, master, sub-master, and change key levels available',
      'All cylinders pinned and cut to exact specification in-house',
      'Registered key control: copies require your authorization card',
      'Full written documentation of the key system delivered to the building owner',
      'Expansion-ready design for adding future locks to the system',
    ],
    faq: [
      { question: 'How many levels of access can a master key system have?', answer: 'Most building master key systems use 2 to 4 levels: change keys for individual units, sub-master keys for floor or department supervisors, master keys for management, and a grand master for the building owner or emergency access. We design the hierarchy to match your actual operational needs.' },
      { question: 'Can I add my master key system to locks I already own?', answer: 'In many cases, yes. If your existing locks use compatible cylinders, we can repin them to fit into the new master key system. We assess the existing hardware during our initial consultation and tell you which locks are compatible and which need to be replaced.' },
      { question: 'What happens if a master key is lost?', answer: 'A lost master key is a serious security event. We recommend rekeying the locks that the lost key could access as soon as possible. Because we maintain records of every key system we design, we can quickly identify which cylinders need to be changed and produce a replacement key set.' },
    ],
  },
];

export interface Area {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
}

export const areas: Area[] = [
  {
    slug: 'downtown-los-angeles',
    name: 'Downtown Los Angeles',
    description: 'Downtown Los Angeles is a mix of historic loft buildings, modern high-rises, and busy commercial storefronts that all have demanding security requirements. Locksmith Luz serves Downtown LA residents and businesses with fast response times and commercial-grade hardware.',
    highlights: [
      'Rapid lockout response to Downtown LA residential lofts and apartment buildings',
      'Commercial lock installation and master key systems for DTLA office buildings',
      'Available 24/7 for emergency calls in the Downtown Los Angeles corridor',
    ],
  },
  {
    slug: 'hollywood',
    name: 'Hollywood',
    description: 'Hollywood\'s diverse mix of single-family homes, multi-unit apartments, and entertainment industry offices means lock and security needs vary block by block. Locksmith Luz has served Hollywood homeowners and business owners since 2011.',
    highlights: [
      'Smart lock and keypad installation popular with Hollywood rental property owners',
      'Fast emergency lockout service throughout Hollywood and the surrounding hills',
      'Rekeying service for new Hollywood tenants and homeowners moving in',
    ],
  },
  {
    slug: 'beverly-hills',
    name: 'Beverly Hills',
    description: 'Beverly Hills homeowners and estate managers expect premium security hardware and discreet, professional service. Locksmith Luz installs high-security locks from Medeco and Abloy and provides white-glove service to Beverly Hills residential and commercial properties.',
    highlights: [
      'High-security Medeco and Mul-T-Lock installation for Beverly Hills estates',
      'Master key systems for multi-residence properties and estate management',
      'Discreet same-day service with background-checked technicians',
    ],
  },
  {
    slug: 'santa-monica',
    name: 'Santa Monica',
    description: 'Santa Monica\'s coastal location and active rental market make regular rekeying, smart lock upgrades, and quick lockout service a constant need. Locksmith Luz covers all of Santa Monica with prompt response times.',
    highlights: [
      'Vacation and short-term rental property smart lock setup throughout Santa Monica',
      'Rekeying for seasonal residents and new tenants near the Santa Monica coast',
      '24/7 automotive and residential lockout service across Santa Monica',
    ],
  },
  {
    slug: 'burbank',
    name: 'Burbank',
    description: 'Burbank is home to major studios, media companies, and thousands of residential properties that each need reliable lock service. Locksmith Luz handles Burbank commercial accounts and homeowners with the same attentive service.',
    highlights: [
      'Commercial lock and access control for Burbank studios and media offices',
      'Residential lock installation and rekeying for Burbank homeowners',
      'Fast local dispatch means shorter wait times across Burbank neighborhoods',
    ],
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    description: 'Pasadena\'s historic craftsman homes and older residential stock often have door hardware that needs upgrading to modern security standards. Locksmith Luz specializes in fitting contemporary high-security locks to Pasadena\'s classic door profiles.',
    highlights: [
      'High-security lock upgrades compatible with historic Pasadena craftsman door frames',
      'Rekeying and key-alike service for Pasadena multi-unit properties',
      'Safe installation and opening service serving Old Pasadena and surrounding neighborhoods',
    ],
  },
  {
    slug: 'long-beach',
    name: 'Long Beach',
    description: 'Long Beach\'s mix of waterfront condos, family homes, and working commercial districts all rely on Locksmith Luz for fast, professional lock service. We cover all Long Beach zip codes with the same guaranteed response commitment.',
    highlights: [
      '24/7 emergency lockout service throughout Long Beach and the harbor area',
      'Commercial rekeying and master key systems for Long Beach retail and offices',
      'Automotive locksmith service for car lockouts and key replacement in Long Beach',
    ],
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    description: 'Glendale is one of the most densely populated cities in California and a core service area for Locksmith Luz. From Armenian-owned businesses on Brand Boulevard to residential neighborhoods north of the 134, we know Glendale well.',
    highlights: [
      'Bilingual technicians available for Glendale\'s diverse residential communities',
      'Commercial lock service for Glendale\'s dense retail and restaurant corridor',
      'Rekeying and smart lock installation for Glendale multi-family properties',
    ],
  },
];

export interface Testimonial {
  text: string;
  author: string;
  location: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    text: 'I locked myself out of my apartment in Hollywood at 11pm and called Locksmith Luz. A technician was at my door in 18 minutes. He opened the lock without scratching anything, checked the deadbolt condition, and was back in his truck in under 15 minutes. Absolutely the best locksmith experience I have ever had.',
    author: 'Marcus T.',
    location: 'Hollywood resident',
    rating: 5,
    service: 'Emergency Lockout Service',
  },
  {
    text: 'We just bought a home in Pasadena and called Locksmith Luz the day we got our keys. They rekeyed all four exterior locks, cut us three sets of keys, and keyed everything alike so we only need one key for the whole house. The technician was done in under an hour and walked us through everything before he left.',
    author: 'Jennifer M.',
    location: 'Pasadena resident',
    rating: 5,
    service: 'Rekeying Services',
  },
  {
    text: 'Locksmith Luz installed high-security Medeco deadbolts on our Beverly Hills property after we had a break-in attempt. The technician explained the difference between standard and high-security locks in plain language, showed me the test results on the hardware, and the installation was clean and professional. Worth every penny.',
    author: 'David R.',
    location: 'Beverly Hills resident',
    rating: 5,
    service: 'High-Security Lock Upgrade',
  },
  {
    text: 'I manage twelve rental units in Santa Monica and switched all of them to smart locks with Locksmith Luz. They handled the entire project over two days, configured each lock to our property management app, and trained our maintenance staff on adding and removing codes. The price was fair and the work was spotless.',
    author: 'Carla B.',
    location: 'Santa Monica property manager',
    rating: 5,
    service: 'Smart Lock Installation',
  },
  {
    text: 'Lost both keys to my car in Downtown LA on a Friday afternoon. Locksmith Luz came to the parking structure, verified my ownership, cut a new transponder key, and programmed it on the spot. Cost was less than half what the dealer quoted me and I did not need a tow. Back on the road in 45 minutes.',
    author: 'Anthony S.',
    location: 'Downtown Los Angeles resident',
    rating: 5,
    service: 'Automotive Locksmith',
  },
  {
    text: 'We inherited a safe from my grandmother and had no combination. Locksmith Luz opened it without destroying it, changed the combination to a new number for us, and the safe still works perfectly. The technician was patient, explained what he was doing at each step, and the price matched the quote exactly.',
    author: 'Sofia K.',
    location: 'Glendale resident',
    rating: 5,
    service: 'Safe Installation and Opening',
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-a-deadbolt-for-your-los-angeles-home',
    title: 'How to Choose the Right Deadbolt for Your Los Angeles Home',
    excerpt: 'Not all deadbolts offer the same level of protection. Learn what ANSI grades mean, which brands hold up in Southern California weather, and how to match hardware to your actual security risk.',
    content: [
      'Walk into any hardware store in Los Angeles and you will find dozens of deadbolts at prices ranging from under twenty dollars to well over two hundred. The price difference is not just about brand recognition. Deadbolts are rated by the American National Standards Institute on a three-grade scale, where Grade 1 is the highest security rating and Grade 3 is the lowest. Most of the cheap options on the shelf are Grade 3, which can fail after as few as 250,000 cycles and offer minimal resistance to forced entry.',
      'California\'s climate adds another variable. Coastal areas like Santa Monica and Long Beach expose exterior hardware to salt air that accelerates corrosion on cheaper zinc and pot-metal locks. Inland areas like Pasadena and the San Fernando Valley deal with temperature swings that can cause door frames to expand and contract, misaligning a deadbolt that was not installed with proper adjustment clearance. Choosing a solid brass or stainless steel Grade 1 deadbolt and having it professionally installed addresses both problems.',
      'Locksmith Luz recommends Schlage B60N or Kwikset 980 for budget-conscious Los Angeles homeowners who want a solid upgrade from a builder-grade lock. For higher-risk properties or those wanting maximum key control, Medeco and Mul-T-Lock high-security deadbolts are available through our service. We carry stock on our mobile units and can have you upgraded the same day you call.',
    ],
    category: 'Guides',
  },
  {
    slug: 'when-to-rekey-vs-replace-locks-california',
    title: 'When to Rekey vs. Replace Your Locks in California',
    excerpt: 'Rekeying is almost always faster and cheaper than replacing a lock, but there are specific situations where replacement is the right call. Here is how to tell the difference.',
    content: [
      'The most common trigger for a lock change in California is moving into a new home or rental. The question most homeowners and renters face is whether to rekey the existing lock or replace it entirely. Rekeying changes the internal pin configuration so old keys no longer work, and it costs significantly less than buying and installing new hardware. If your existing lock is in good mechanical condition and is at least a Grade 2 rating, rekeying is the right call in most cases.',
      'There are four situations where replacement makes more sense than rekeying. First, if the lock is worn, stiff, or has visible damage to the cylinder or housing, rekeying a failing lock just delays the inevitable. Second, if you are upgrading to a smart lock or high-security hardware, you will need a new unit regardless. Third, if the existing lock is a low-security Grade 3 that you want to upgrade, a rekey maintains the same weak hardware. Fourth, if the door bore hole is the wrong size for modern deadbolts, replacement may be required as part of correcting the installation.',
      'Locksmith Luz helps California homeowners and landlords make this decision honestly. We inspect the existing lock and give you a straight recommendation with pricing for both options. We are not going to recommend a more expensive replacement when a forty-dollar rekey is the right answer for your situation.',
    ],
    category: 'Tips',
  },
  {
    slug: 'california-rental-property-security-smart-locks',
    title: 'How California Landlords Are Using Smart Locks to Simplify Property Management',
    excerpt: 'Smart locks let California property managers issue, change, and revoke access codes remotely without cutting keys or visiting the property. Here is what you need to know before switching.',
    content: [
      'Managing tenant turnover in California means frequent rekeying, new key duplication, and the occasional lockout call at inconvenient hours. Smart locks address all three problems by replacing the physical key with a user code or mobile credential that can be created and deleted from a phone app. When a tenant moves out, the property manager deletes their code from the app before even leaving the office. When the new tenant arrives, a fresh code is waiting. No locksmith visit required for the transition.',
      'The most important question before switching a rental unit to a smart lock is connectivity. Wi-Fi smart locks require a stable router signal at the door. If the unit is in a building with thick concrete walls or a basement location, a Z-Wave or Zigbee lock connected to a hub may provide better reliability. Battery life is also a consideration. Most quality smart locks run 6 to 12 months on AA batteries, and the better models send a low-battery alert to the app before the batteries actually fail.',
      'Locksmith Luz has installed smart locks across dozens of California rental properties, from single-family homes in Burbank to apartment buildings in Long Beach. We handle the hardware installation, app configuration, and tenant onboarding in a single visit. We also retain a physical key backup during installation so the property always has a non-electronic entry method in case of technology issues.',
    ],
    category: 'Guides',
  },
  {
    slug: 'car-key-replacement-los-angeles-locksmith-vs-dealer',
    title: 'Car Key Replacement in Los Angeles: Locksmith vs. Dealer',
    excerpt: 'Losing a car key in Los Angeles can cost you hundreds of dollars at a dealership. A mobile automotive locksmith often provides the same service faster and for significantly less money.',
    content: [
      'The days of the simple cut metal car key are mostly over. Modern vehicles use transponder chips, proximity fobs, and push-button start systems that require programming in addition to key cutting. When you lose a car key in Los Angeles, the default reaction for most people is to call the dealer. That is understandable, but it is often the most expensive path. Dealers charge for the key blank, programming labor, a service fee, and sometimes a diagnostic charge just to identify the correct key type for your VIN.',
      'A mobile automotive locksmith with the right programming equipment can typically cut and program a replacement key on-site at your location for less than a dealership charges, and without requiring a tow. The key difference is equipment capability. Not all locksmiths invest in the software and hardware needed for modern vehicle key programming, which is why it is worth asking upfront whether the locksmith you call can actually program your specific vehicle year, make, and model.',
      'Locksmith Luz carries programming tools compatible with most domestic, European, and Asian vehicles and can verify compatibility with your VIN over the phone before dispatching. We come to you anywhere in the Los Angeles area and have you driving again in under an hour in most cases. We also require proof of ownership before cutting any automotive key, protecting you as much as the next car owner.',
    ],
    category: 'Tips',
  },
  {
    slug: 'home-security-checklist-new-california-homeowners',
    title: 'A New Homeowner Security Checklist for California Homes',
    excerpt: 'The first 30 days after closing on a California home are the most important for establishing solid lock and security habits. This checklist walks you through everything to do before you settle in.',
    content: [
      'Congratulations on your new California home. Before you unpack a single box, there are five security tasks worth completing. First, rekey or replace all exterior door locks. You do not know how many copies of the previous owner\'s key exist, and a same-day rekeying by Locksmith Luz costs far less than the worry of an unknown key floating around. Second, test every window latch and sliding door lock in the home. Builder-grade window hardware is notoriously weak, and California law does not require landlords or sellers to disclose latch conditions.',
      'Third, identify your garage entry point. The door between the garage and the living space is often the weakest exterior entry in a California home because it is out of sight and frequently left unlocked. Install a Grade 1 deadbolt on this door and make it part of your daily locking routine. Fourth, consider a smart lock or keypad for the front door if you have service providers, family members, or short-term guests who need access. A code is easier to change than a key, and the access log tells you exactly when the door was opened.',
      'Fifth, call Locksmith Luz for a security walkthrough. We visit new homeowners throughout Los Angeles and the broader California area to assess lock conditions, door frame strength, and access points. The walkthrough is free with any service, and most customers find at least one thing they would not have noticed on their own. Starting a new home with solid security is one of the best investments you can make in your peace of mind.',
    ],
    category: 'Safety',
  },
];

export const stats = [
  { value: '15+', label: 'Years Experience', numericValue: 15, suffix: '+' },
  { value: '3,500+', label: 'Locks Serviced', numericValue: 3500, suffix: '+' },
  { value: '4.9', label: 'Star Rating', numericValue: 4.9, suffix: '' },
  { value: '20 min', label: 'Avg. Response Time', numericValue: 20, suffix: ' min' },
];

export const processSteps = [
  {
    step: 1,
    title: 'Call or Submit a Request',
    description: 'Reach us by phone or our online form any time of day. A real Locksmith Luz dispatcher answers immediately and collects the details needed to get the right technician to you.',
    icon: 'Phone',
  },
  {
    step: 2,
    title: 'Get an Upfront Quote',
    description: 'Before we dispatch, we give you a clear price quote over the phone. No hidden fees, no bait-and-switch on arrival. You know the number before anyone leaves the shop.',
    icon: 'DollarSign',
  },
  {
    step: 3,
    title: 'Technician Arrives and Works',
    description: 'Your certified Locksmith Luz technician arrives with all tools and hardware needed, inspects the situation with you, and completes the work cleanly and efficiently.',
    icon: 'Wrench',
  },
  {
    step: 4,
    title: 'Test Every Key Before We Leave',
    description: 'We hand you each new key, watch you test it in the lock, and confirm everything operates perfectly before we close the job. Your satisfaction is the finish line, not our arrival.',
    icon: 'CheckCircle',
  },
];

export const whyUs = [
  {
    title: 'We Arrive in 20 Minutes or Less',
    description: 'When you are locked out, every minute counts. Locksmith Luz dispatches a certified technician immediately, and our average on-site arrival time across the greater Los Angeles area is under 20 minutes.',
    icon: 'Clock',
  },
  {
    title: 'Keys Cut and Programmed On-Site',
    description: 'Our mobile units carry full key-cutting and transponder programming equipment, so there is no waiting at a shop and no second visit. We hand you a working key before we leave your driveway.',
    icon: 'Key',
  },
  {
    title: 'We Show You the Lock Before We Quote',
    description: 'Before we give you a price, we inspect the lock and walk you through exactly what needs to be done and why. You see the problem yourself, then you decide. No pressure, no surprises on the final bill.',
    icon: 'Eye',
  },
  {
    title: 'Your Lock History Kept on File',
    description: 'We maintain a service record for every customer, including which locks were installed, when they were rekeyed, and what key codes are on file. One call is all it takes to get back into your home years later.',
    icon: 'FileText',
  },
];

export const faqs = {
  'Home Lockouts': [
    { question: 'How fast can you arrive for a home lockout?', answer: 'Our average response time in the Los Angeles metro area is under 20 minutes. A real dispatcher answers your call immediately and gets a technician rolling right away.' },
    { question: 'Will you damage my door when opening it?', answer: 'In the vast majority of lockout cases, we open the door without any damage using professional non-destructive entry tools. We always discuss the method and get your approval before any drilling is required.' },
    { question: 'Do you charge more for after-hours home lockouts?', answer: 'We quote the job over the phone before dispatch, so after-hours rates are stated clearly upfront. No surprises on the invoice.' },
    { question: 'Can you open any type of residential lock?', answer: 'We carry tools for standard deadbolts, knob locks, lever sets, high-security deadbolts, and padlocks. For very unusual hardware, we may need to consult on-site before confirming the approach.' },
  ],
  'Emergency': [
    { question: 'Are you available 24 hours a day?', answer: 'Yes. Locksmith Luz operates 24/7 with live dispatchers, not an automated answering service. Emergency calls are prioritized and dispatched immediately at any hour.' },
    { question: 'What counts as a locksmith emergency?', answer: 'Any situation where you cannot safely enter or secure your home, car, or business is an emergency. This includes lockouts, broken keys, damaged locks, and post-break-in lock replacement.' },
    { question: 'How do I verify my technician is from Locksmith Luz?', answer: 'Every Locksmith Luz technician carries a company-issued photo ID and arrives in a marked vehicle. You can also call our main number to confirm the tech\'s name before opening your door.' },
    { question: 'Do you serve all California cities?', answer: 'We have the fastest response times in the Los Angeles metro area and serve cities throughout California. Response times outside the core LA area will vary by location.' },
  ],
  'Automotive': [
    { question: 'Can you make a car key without the original?', answer: 'In most cases, yes. Using your vehicle identification number and proof of ownership, we can cut and program a new key even when no original key exists.' },
    { question: 'Is a locksmith cheaper than the dealership for car keys?', answer: 'Typically yes, often significantly so. We come to you, provide upfront pricing, and eliminate the need for a tow. Most customers save 40 to 60 percent versus dealer pricing.' },
    { question: 'Do you program push-button start keys?', answer: 'Yes. We carry programming tools compatible with most domestic, European, and Asian vehicles, including push-button start proximity key systems. We verify compatibility over the phone before dispatch.' },
    { question: 'What do I need for a car key replacement?', answer: 'Your vehicle identification number, proof of ownership (title or registration), and a valid photo ID. This protects you as much as anyone else.' },
  ],
  'Commercial': [
    { question: 'Can you design a master key system for my building?', answer: 'Yes. We design master key hierarchies for apartment buildings, office parks, schools, and retail centers. We document the entire system and deliver a copy to the building owner.' },
    { question: 'Do you service commercial properties after hours?', answer: 'Absolutely. Many commercial clients prefer off-hours scheduling to avoid disrupting operations. We accommodate early morning, evening, and weekend appointments.' },
    { question: 'What should I do if an employee with building access leaves?', answer: 'Rekey the locks that employee could access as soon as possible. We can typically schedule a commercial rekey within 24 hours of your call.' },
    { question: 'Do you install ADA-compliant hardware?', answer: 'Yes. We install ADA-compliant lever handles, push bars, and exit devices that meet California building code requirements for commercial and public-access spaces.' },
  ],
};

export const aboutValues = [
  {
    title: 'The Luz Promise: No Surprise Charges',
    description: 'We quote the job before we start it, and that number does not change when the invoice arrives. California customers have told us this is the single thing that keeps them calling us back year after year.',
  },
  {
    title: 'Every Technician Is Background-Checked',
    description: 'You are opening your door to us, and we take that seriously. Every Locksmith Luz tech goes through a full criminal background check, identity verification, and skills assessment before ever stepping onto a customer property.',
  },
  {
    title: 'Built on Word-of-Mouth Across California',
    description: 'We have never spent a dollar on billboard advertising. Our growth has come entirely from customers telling their neighbors, coworkers, and landlords about Locksmith Luz. That reputation is the standard we protect on every single call.',
  },
  {
    title: 'We Do Not Leave Until the Lock Works',
    description: 'Every job ends the same way: we test the lock, hand you the key, and ask you to try it yourself. If anything feels off, we fix it on the spot. Our technicians are trained to stay until you are fully satisfied.',
  },
];
