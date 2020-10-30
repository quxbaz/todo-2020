// import {values, getRandomItem} from 'qux'

const useNormalDataset = (api) => {

  {
    const id = api.lists.create({title: 'AA MAIN'})
    api.lists.createNote(id, {text: 'Training the mind.'})
    api.lists.createNote(id, {text: 'Running with a metronome.'})
    api.lists.createNote(id, {text: 'Breath the backdrop canvas for thoughts to arise. Vanity, rage, pride not the thing.'})
    api.lists.createNote(id, {text: 'Design developing sensitivity, being intuned.'})
    api.lists.createNote(id, {text: 'Developing a sense of objectivity and reality.'})
    api.lists.createNote(id, {text: '14" bird\'s eye comparison shot'})
  }

  {
    const id = api.lists.create({title: 'AA Projects'})
    api.lists.createNote(id, {text: 'Overhead CNC table saw alternative. Table saws are crap. Dust. Kickback. Binding. Dangerous. Too big. Imperfect cuts. Non-flat, sloppy blades. Blades too large. We can do better.'})
    api.lists.createNote(id, {text: 'Epoxy granite phone stand.'})
    api.lists.createNote(id, {text: 'Epoxy granite infill hand plane.'})
    api.lists.createNote(id, {text: 'Lego brick type system for rapid prototyping. How to incorporates screws and threads?'})
    api.lists.createNote(id, {text: 'Spokeshave, Boggs style flat bottom.'})
    api.lists.createNote(id, {text: 'Double gear reduction drive arbor/embossing press.'})
    api.lists.createNote(id, {text: 'Screw tensioned ballistic tool. Uses a screw to charge/tension/prime a piston type mechanism until locking. Upon locking, detaches the mechanism from the screw and readies it for fire. Mechanism of energy storage is by way of elastic or something more efficient; or a tight spring. On pulling the trigger, launches a steel ball or other projectile accurately through a hollow bore. Similar to "pen gun" mechanism.'})
    api.lists.createNote(id, {text: 'Precision bandsaw for joinery.'})
    api.lists.createNote(id, {text: 'Above the table grinder with sheet metal backflap for dust collection. Wheel spins AWAY from tool. Sliding and locking tool rest. Adjustable speed step pulley. Low vibration. A stop prevents rotation, not a clamp or set screw. Allows the tool to ease into the wheel. Acrylic top cover to block dust. Positional tool rest for skew grinds.'})
    api.lists.createNote(id, {text: 'Screw actuated chisel press. Back of blade is flush against the 90 degree face of the tool. A shoulder plane chisel can be used. Indicator.'})
    api.lists.createNote(id, {text: 'Drill press fence.'})
    api.lists.createNote(id, {text: 'Spear point chisel.'})
    api.lists.createNote(id, {text: 'Clamp down compound lever chisel.'})
    api.lists.createNote(id, {text: 'Bread work surface with non-slip base. Always a hassle to clean up the counter.'})
    api.lists.createNote(id, {text: 'Double row long routed magnet natural contoured corners and edges lexan cover sloped knife block.'})
    api.lists.createNote(id, {text: 'Long distance overnight(s) running pack.'})
    api.lists.createNote(id, {text: 'Precision belt sander. Adjustable tension. Precision flat platen. Thinner backing on sandpaper.'})
    api.lists.createNote(id, {text: 'Wagon vise sharpening stone holder'})
    api.lists.createNote(id, {text: 'Mochi press'})
    api.lists.createNote(id, {text: 'Small joinery table saw'})
    api.lists.createNote(id, {text: 'A safe place for dogs to retreat to during thunderstorms. - Insulated against low (rumbling) and high (crackling) frequencies. - White noise generation'})
    api.lists.createNote(id, {text: 'Saw/kerf plane'})
    api.lists.createNote(id, {text: 'DIY camera tripod'})
  }

  {
    const id = api.lists.create({title: 'Project Priority List'})
    api.lists.createNote(id, {text: 'Table saw.'})
    api.lists.createNote(id, {text: 'Shelving.'})
    api.lists.createNote(id, {text: 'Drafting board.'})
    api.lists.createNote(id, {text: 'Precision grinding table.'})
    api.lists.createNote(id, {text: 'Router table.'})
    api.lists.createNote(id, {text: 'Horizontal drill.'})
    api.lists.createNote(id, {text: '(H) Mochi press.'})
    api.lists.createNote(id, {text: 'New hand plane.'})
    api.lists.createNote(id, {text: '(H) Tortilla press.'})
    api.lists.createNote(id, {text: '($) Maple strop stamping fixture.', isDone: true})
    api.lists.createNote(id, {text: 'Adjustable routing template.', isDone: true})
    api.lists.createNote(id, {text: 'Dado routing jig.', isDone: true})
    api.lists.createNote(id, {text: 'Lathe.', isDone: true})
    api.lists.createNote(id, {text: 'Mini-planer / router sled.', isDone: true})
    api.lists.createNote(id, {text: '($) Tensioned strop.', isDone: true})
    api.lists.createNote(id, {text: 'Stone holder.', isDone: true})
    api.lists.createNote(id, {text: 'Precision square honing fixture.', isDone: true})
  }

  {
    const id = api.lists.create({title: 'Blog'})
    api.lists.createNote(id, {text: 'Step by step making a strop'})
    api.lists.createNote(id, {text: 'Sharpening process'})
    api.lists.createNote(id, {text: 'Comparison different compounds and diamond'})
    api.lists.createNote(id, {text: 'Lapping paper'})
    api.lists.createNote(id, {text: 'Most cost effective stone'})
  }

  {
    const id = api.lists.create({title: 'Cooking'})
    api.lists.createNote(id, {text: 'Lentils'})
    api.lists.createNote(id, {text: 'Rice'})
    api.lists.createNote(id, {text: 'Carrots'})
    api.lists.createNote(id, {text: 'Chicken wings, bones'})
    api.lists.createNote(id, {text: 'Celery'})
    api.lists.createNote(id, {text: 'Bacon'})
    api.lists.createNote(id, {text: 'Chicken stock'})
    api.lists.createNote(id, {text: 'Beans'})
    api.lists.createNote(id, {text: 'Peas'})
    api.lists.createNote(id, {text: 'Butter'})
  }

  {
    const id = api.lists.create({title: 'Design'})
    api.lists.createNote(id, {text: 'A better notes app. One which helps to align attention. Can see an overview of notes, but also which ones are important.'})
  }

  {
    const id = api.lists.create({title: 'Gamedev: Engines Virtual TD'})
    api.lists.createNote(id, {text: 'Towers have a skill tree for unique talents. Talents can level up. Talents imbue energy at the start of a blueprint.'})
    api.lists.createNote(id, {text: 'Scattered energy pulse (like a bullet hell particle).'})
    api.lists.createNote(id, {text: 'Scattered mine shot. Attaches to enemies. Explodes after duration. Mines explode in sequence after they were created, not all at once.'})
    api.lists.createNote(id, {text: 'Teleport gun. Moves a unit (teleport, shadow effect) n seconds back in time. Can only affect a unit x number if times. % chance of proc.'})
    api.lists.createNote(id, {text: 'Beam. Fires a charged piercing beam straight.'})
    api.lists.createNote(id, {text: 'Rolling bouncing energy particles. Like the rolling energy weapon you find in cave story. The second weapon.'})
    api.lists.createNote(id, {text: 'Vulkan. Very rapid machine gun. Has large clip but can overheat and require cooldown.'})
    api.lists.createNote(id, {text: 'Shotgun. Large spread. Slow rate. Fast projectile.'})
    api.lists.createNote(id, {text: 'Carrier, interceptor. Releases interceptors that buzz around and fire at enemies. Like the carrier from StarCraft.'})
    api.lists.createNote(id, {text: 'Flamethrower. Constant damage. Piercing.'})
    api.lists.createNote(id, {text: 'Boomerang. Projectile needs to return after hitting enemy before firing again.'})
    api.lists.createNote(id, {text: 'Sniper nest. Can recruit more snipers. Minimum firing range. High damage. Slow rate.'})
    api.lists.createNote(id, {text: 'Grenade. Early AoE tower. Small radius. High lobbing arc and somewhat slow projectile.'})
    api.lists.createNote(id, {text: 'Poison. Slow and damage over time. Talent to upgrade targeting.'})
    api.lists.createNote(id, {text: 'Missiles. Talent to upgrade to global range. Seeks enemies.'})
    api.lists.createNote(id, {text: 'Concusser. Stuns single enemy.'})
    api.lists.createNote(id, {text: 'Popgun. Early pistol type weapon. Instant effect. Medium rate.'})
    api.lists.createNote(id, {text: 'Uzi type weapon. Very fast rate but every volley has a reload time in between.'})
    api.lists.createNote(id, {text: 'Bombardier. Like multiple grenades. Large area. Low damage.'})
    api.lists.createNote(id, {text: 'Marksman/ranger nest. Okay damage but excellent targeting. Attacks weakest enemies. Has secondary weapon.'})
    api.lists.createNote(id, {text: 'Mortar. Better grenade. Longer range.'})
    api.lists.createNote(id, {text: 'Tank round. Like grenade + sniper. Minimum range.'})
    api.lists.createNote(id, {text: 'Scatter particles.'})
    api.lists.createNote(id, {text: 'Particle pistol. Like pop-gun but the energy version.'})
    api.lists.createNote(id, {text: 'Chain lighting.'})
    api.lists.createNote(id, {text: 'Eroder (energy). Burns armor on hit.'})
    api.lists.createNote(id, {text: 'Shock interceptors.'})
    api.lists.createNote(id, {text: 'Goo gun. Slows a single unit.'})
    api.lists.createNote(id, {text: 'Incinerator.'})
    api.lists.createNote(id, {text: 'IDEAS'})
    api.lists.createNote(id, {text: 'Stages are input/outputs.'})
    api.lists.createNote(id, {text: 'Stages are visible running simultaneously at the same time.'})
    api.lists.createNote(id, {text: 'Stages are engines, smaller automata part of a larger world.'})
    api.lists.createNote(id, {text: 'Stages can be shrunk/minimized/virtualized and sent to a higher layer of virtualization.'})
    api.lists.createNote(id, {text: 'The goal can be to reach reality, the highest layer.'})
    api.lists.createNote(id, {text: 'Emergent weapons system.'})
    api.lists.createNote(id, {text: 'Emergent monsters.'})
    api.lists.createNote(id, {text: 'Flatland like progression from 1D to 2D to 3D to 4D.'})
    api.lists.createNote(id, {text: 'Procedurally generated world, weapons, monsters.'})
    api.lists.createNote(id, {text: 'Monsters can step on power tiles to split/powerup/etc.'})
    api.lists.createNote(id, {text: 'Towers kill monsters and convert them to energy.'})
    api.lists.createNote(id, {text: 'Energy becomes fuel for engines and powers subsequent engines.'})
    api.lists.createNote(id, {text: 'Energy blobs are unaffected by power tiles. Monsters must be defeated post power tile state to reap the rewards.'})
    api.lists.createNote(id, {text: 'The player can go back to previous stages to incur progress.'})
    api.lists.createNote(id, {text: 'Sending towers to a lower dimension.'})
    api.lists.createNote(id, {text: 'Inspiration 2D Bomberman stages.'})
    api.lists.createNote(id, {text: 'Destructibility.'})
    api.lists.createNote(id, {text: 'Very simple initial stages stark black and white lines/tiles and towers.'})
    api.lists.createNote(id, {text: 'Weapons begin at complexity levels. Stage 1 (the simplest): fires 0 range.'})
    api.lists.createNote(id, {text: 'Towers can be placed on track but take damage from monsters or can be disabled/stunned. Some kind of cost/reward mechanic. Or maybe these towers have very limited ability (e.g., 0-1 range only).'})
    api.lists.createNote(id, {text: 'Interceptor towers. Flying units. Adjusting previous engines adjust your weapons. Minifying weapons.'})
    api.lists.createNote(id, {text: 'Themes: virtualization, recursion. The stages are your weapons/engines/towers. Managing a multiple palette of simultaneous stages.'})
    api.lists.createNote(id, {text: 'Enemies come from generators. Maybe not in stages. Can come in patterns.'})
    api.lists.createNote(id, {text: 'Challenges come periodically. The trellis. Maybe a traditional TD stage?'})
    api.lists.createNote(id, {text: 'What\'s the failure condition? Win condition? How does progression occur in a concrete, definitive way?'})
    api.lists.createNote(id, {text: 'How do you unlock new stages?'})
    api.lists.createNote(id, {text: 'Are stages and enemy generators independent?'})
    api.lists.createNote(id, {text: 'How do you procedurally generate weapons?'})
    api.lists.createNote(id, {text: 'A gamblling shop to put excess gold.'})
    api.lists.createNote(id, {text: 'Limited rewind mechanic that only rewinds enemies.'})
  }

  {
    const id = api.lists.create({title: 'Gamedev: Undercrawl'})
    api.lists.createNote(id, {text: 'Whitelist, blacklist properties. Accepting, receiver ports. Factory that receives a projectile spell.'})
    api.lists.createNote(id, {text: 'Conditions, events, triggers.'})
    api.lists.createNote(id, {text: 'Don\'t think in terms of projectiles, but in mutating the game state.'})
    api.lists.createNote(id, {text: 'Some properties can be used as "guides" and be unused in the original spell.'})
    api.lists.createNote(id, {text: 'A spell takes a game state, and returns a game state, over the course of its life.'})
    api.lists.createNote(id, {text: 'spell(state) -> state'})
    api.lists.createNote(id, {text: 'Spells are not altering only themselves, they are altering (outputting, returning) the new game world. They are essentially "animations" in terms of functions. They operate over time; but instead of only affecting itself, it has the potential to affect *anything* in the game world.'})
    api.lists.createNote(id, {text: 'Outputting a new game state based on the current state. The ultimate in flexibility.'})
    api.lists.createNote(id, {text: 'What is the function representation of a fireball?'})
    api.lists.createNote(id, {text: 'Functions, transforms, maps.'})
    api.lists.createNote(id, {text: 'You need to support composition and limited inheritance to enable complex behaviors.'})
    api.lists.createNote(id, {text: 'Can spells be represented as data or functions? Functions are data that act dependently on other data; conditional data.'})
    api.lists.createNote(id, {text: 'Areas you can play through again like Diablo waypoints. Areas can have multiple stages. Unpredictable events.'})
    api.lists.createNote(id, {text: 'Movement. Elevation?'})
    api.lists.createNote(id, {text: 'Feels like real-time action.'})
    api.lists.createNote(id, {text: 'Run pixel art. The gamblor.'})
    api.lists.createNote(id, {text: 'Storytelling through details.'})
    api.lists.createNote(id, {text: 'Trellis framework. Enough structure to give players a foothold on the main ideas. Vines spreading out from the frame.'})
  }

  {
    const id = api.lists.create({title: 'Gifts'})
    api.lists.createNote(id, {text: '# Boards'})
    api.lists.createNote(id, {text: 'Cutting board'})
    api.lists.createNote(id, {text: 'Bread board'})
    api.lists.createNote(id, {text: 'Butcher block'})
    api.lists.createNote(id, {text: '# Tools'})
    api.lists.createNote(id, {text: 'Chopper'})
    api.lists.createNote(id, {text: 'Bread cutter'})
    api.lists.createNote(id, {text: 'Dog bowl station'})
    api.lists.createNote(id, {text: 'Tortilla, roti press'})
    api.lists.createNote(id, {text: '# Misc'})
    api.lists.createNote(id, {text: 'Cookies'})
    api.lists.createNote(id, {text: 'Sprout seeds'})
    api.lists.createNote(id, {text: 'Hot sauce variety'})
  }

  {
    const id = api.lists.create({title: 'Gifts', isAlive: false})
    api.lists.createNote(id, {text: '# Boards'})
    api.lists.createNote(id, {text: 'Cutting board'})
    api.lists.createNote(id, {text: 'Bread board'})
    api.lists.createNote(id, {text: 'Butcher block'})
    api.lists.createNote(id, {text: '# Tools'})
    api.lists.createNote(id, {text: 'Chopper'})
    api.lists.createNote(id, {text: 'Bread cutter'})
    api.lists.createNote(id, {text: 'Dog bowl station'})
    api.lists.createNote(id, {text: 'Tortilla, roti press'})
    api.lists.createNote(id, {text: '# Misc'})
    api.lists.createNote(id, {text: 'Cookies'})
    api.lists.createNote(id, {text: 'Sprout seeds'})
    api.lists.createNote(id, {text: 'Hot sauce variety'})
  }

  {
    const id = api.lists.create({title: 'Tools to Acquire'})
    api.lists.createNote(id, {text: 'Precision framing square.'})
    api.lists.createNote(id, {text: 'Large machinist square.'})
    api.lists.createNote(id, {text: '36" precision straight edge.'})
    api.lists.createNote(id, {text: 'Quality carbon steel punch set for wood.'})
    api.lists.createNote(id, {text: 'Book/video on traditional plane making.'})
    api.lists.createNote(id, {text: 'Plane maker\'s float.'})
    api.lists.createNote(id, {text: 'High quality file with good thickness.'})
    api.lists.createNote(id, {text: '12" bar clamps.'})
    api.lists.createNote(id, {text: 'French curves.'})
    api.lists.createNote(id, {text: 'Hard Arkansas stone; soft Arkansas.'})
    api.lists.createNote(id, {text: 'Making and Mastering Wood Planes (David Finck).'})
    api.lists.createNote(id, {text: 'Making Traditional Wooden Planes (John M. Whelan).'})
    api.lists.createNote(id, {text: 'Blum sharpening box.'})
    api.lists.createNote(id, {text: 'Blum plane.'})
    api.lists.createNote(id, {text: 'Diamond flattening stone.'})
    api.lists.createNote(id, {text: 'Large depth, clearance drill press.'})
    api.lists.createNote(id, {text: 'Ultra-fine lapping film.'})
    api.lists.createNote(id, {text: 'Smaller brayer for spreading glue.'})
    api.lists.createNote(id, {text: 'Iwasaki file/rasps.'})
    api.lists.createNote(id, {text: 'Spiral flute taps.'})
    api.lists.createNote(id, {text: 'Air monitor.'})
    api.lists.createNote(id, {text: 'Air cleaner.'})
    api.lists.createNote(id, {text: 'Dust deputy.'})
    api.lists.createNote(id, {text: 'Random orbit sander.'})
    api.lists.createNote(id, {text: 'Flexshaft rotary tool.'})
    api.lists.createNote(id, {text: 'More lighting.'})
    api.lists.createNote(id, {text: 'Mortise and Tenon magazine.'})
    api.lists.createNote(id, {text: 'Center drill set.'})
    api.lists.createNote(id, {text: 'Brad point set.'})
    api.lists.createNote(id, {text: 'Counterbore set.'})
    api.lists.createNote(id, {text: 'High speed belt sander.'})
    api.lists.createNote(id, {text: 'Treadmill motors.'})
    api.lists.createNote(id, {text: 'Square grind blade.'})
    api.lists.createNote(id, {text: 'Finishing rip blade.'})
    api.lists.createNote(id, {text: 'Low angle bench chisel.'})
    api.lists.createNote(id, {text: 'Side cutting chisel.'})
    api.lists.createNote(id, {text: 'Hearing protection', isDone: true})
    api.lists.createNote(id, {text: 'Food grade finish.', isDone: true})
  }

  {
    const id = api.lists.create({title: 'Marketing'})
    api.lists.createNote(id, {text: 'Newsletter'})
    api.lists.createNote(id, {text: 'Packing steps for strop'})
    api.lists.createNote(id, {text: 'Sharpening and slicing leather, wood, paper, food'})
  }

  {
    const id = api.lists.create({title: 'MMA Betting'})
    api.lists.createNote(id, {text: 'Mike Rodriguez to outclass Ed Herman.'})
  }

  {
    const id = api.lists.create({title: 'Outside'})
    api.lists.createNote(id, {text: 'Shortest route to the Gila (river)'})
    api.lists.createNote(id, {text: 'East of Arenas'})
    api.lists.createNote(id, {text: 'Wilson Creek'})
    api.lists.createNote(id, {text: 'Hells Canyon'})
    api.lists.createNote(id, {text: 'Further along Bear Creek'})
    api.lists.createNote(id, {text: 'Gomez Peak'})
    api.lists.createNote(id, {text: 'Further along Radio Tower'})
    api.lists.createNote(id, {text: 'Twin Sisters Creek loop into HWY 15'})
    api.lists.createNote(id, {text: 'Off-trail from Dragonfly'})
    api.lists.createNote(id, {text: 'Further along in Meadow Creek'})
  }

  {
    const id = api.lists.create({title: 'Photography'})
    api.lists.createNote(id, {text: 'Composition: Frame within a frame.'})
    api.lists.createNote(id, {text: 'Low as possible iso.'})
    api.lists.createNote(id, {text: 'Shallow depth of field to focus on object.'})
    api.lists.createNote(id, {text: 'Three perspectives: Low angle, front angle, bird\'s-eye.'})
    api.lists.createNote(id, {text: 'Rule of thirds, and leading lines.'})
    api.lists.createNote(id, {text: 'The space between noise and order.'})
    api.lists.createNote(id, {text: 'The object should fill most of the frame. Get closer than you think you need to.'})
    api.lists.createNote(id, {text: 'Listen to your immediate impression when reviewing a photo.'})
  }

  {
    const id = api.lists.create({title: 'Props'})
    api.lists.createNote(id, {text: 'Block plane out of frame'})
    api.lists.createNote(id, {text: 'Hand planes'})
    api.lists.createNote(id, {text: 'Antique chisel'})
    api.lists.createNote(id, {text: 'More wood tools out of frame to suggest a working bench'})
  }

  {
    const id = api.lists.create({title: 'Light box issues'})
    api.lists.createNote(id, {text: 'Side walls easily tips over'})
    api.lists.createNote(id, {text: 'Side seams are easily visible'})
    api.lists.createNote(id, {text: 'Paper not smooth enough'})
    api.lists.createNote(id, {text: 'Not enough lighting'})
    api.lists.createNote(id, {text: 'How to easily attach roof?'})
    api.lists.createNote(id, {text: 'Cherry platform too little contrast with strop'})
  }

  for (let i=0; i < 10; i++) {
    const id = api.lists.create({title: 'Programming: Layout Engine'})
    api.lists.createNote(id, {text: 'Some properties can simply be defined in terms of belonging to a component. Font, color, background are properties which you can directly attribute to a single component and neither effect nor rely on any other component.'})
    api.lists.createNote(id, {text: 'In CSS we intermingle such properties (component properties) with layout properties such as margin and positioning.'})
    api.lists.createNote(id, {text: 'However in practice, layout isn\'t necessarily a property we want belonging to a single component and the CSS engine infers it to be relative usually to a parent component.'})
    api.lists.createNote(id, {text: 'This inferrence shadows an important point that programmers take for granted. I.e., positioning is always relative to something. Positioning is not a property that belongs to a component, but rather something *between* components.'})
    api.lists.createNote(id, {text: 'Yet, we define position properties as belonging to single components.'})
    api.lists.createNote(id, {text: 'Take an example of a <list> component with a <heading>. We want the <heading> to have a comfortable vertical space between itself and the <list>.'})
    api.lists.createNote(id, {text: 'In CSS we set a margin to add this space.'})
    api.lists.createNote(id, {text: 'Does the margin property belong to the <heading> or the <list> component.'})
    api.lists.createNote(id, {text: 'Do we set a margin-bottom on the <heading> or a margin-top to the <list>?'})
    api.lists.createNote(id, {text: 'We can do either of course, but which one is the *correct* approach?'})
  }

  {
    const id = api.lists.create({title: 'Programming: New Interface', isAlive: false})
    api.lists.createNote(id, {text: 'Shelves. Stacks of paper.'})
    api.lists.createNote(id, {text: 'Does it go far enough? Is it merely iterative or is it revolutionary?'})
    api.lists.createNote(id, {text: 'Users know when they\'re being artificially stifled. When there\'s a fixed delay. My worry with Dynamicland is that users will constantly run into these imposed barriers feeling like there should be a way to perform this or that trivially, but can\'t due to artificial constraints.'})
    api.lists.createNote(id, {text: 'Are navigation and editing actually different?'})
    api.lists.createNote(id, {text: 'An atomic language for editing and navigation.'})
    api.lists.createNote(id, {text: 'What is close mapping to our thoughts, ideas, structures, visualization?'})
  }

  {
    const id = api.lists.create({title: 'Programming: virtualjs', isAlive: false})
    api.lists.createNote(id, {text: 'Actions and state diffs to be visually separated by time so that actions clumped up together but actually part of the same conceptually atomic action are treated visually as a single action instead of separately.'})
    api.lists.createNote(id, {text: 'Ability to do real-time multi-user subscribing to synchronized/mirrored sessions with either peer-to-peer or a websocket connection to a central server.'})
    api.lists.createNote(id, {text: 'Each virtual app specifies its layout in terms of the size of its top-most parent window.'})
  }

  {
    const id = api.lists.create({title: 'Project: Better Bar Clamp'})
  }

  {
    const id = api.lists.create({title: 'Project: Cam-Lever Rip Fence', isAlive: false})
    api.lists.createNote(id, {text: 'Screw down block to take down slack at the end of fence.'})
    api.lists.createNote(id, {text: 'Adjuster at handle end.'})
    api.lists.createNote(id, {text: 'Pivoting end block; two bearings.'})
  }

  {
    const id = api.lists.create({title: 'Project: Featherboard', isAlive: false})
    api.lists.createNote(id, {text: 'Shorter width. Use multiple smaller featherboards instead of one large board.'})
    api.lists.createNote(id, {text: 'Very important to have feathers end at the same point.'})
    api.lists.createNote(id, {text: 'Cut end at same angle for better clamping.'})
    api.lists.createNote(id, {text: 'Thinner feathers.'})
    api.lists.createNote(id, {text: 'Long enough to clamp at end  of table at both start and end of cut.'})
    api.lists.createNote(id, {text: '2.5" depth.'})
  }

  for (let i=0; i < 40; i++) {
    const id = api.lists.create({title: 'Project: Hand Plane', isAlive: false})
    api.lists.createNote(id, {text: 'Chips get stuck in mouth and come out crinkled.'})
    api.lists.createNote(id, {text: 'Wedge too long. Interferes with chipbreaker.'})
    api.lists.createNote(id, {text: 'Uncomfortable to hold. Iron width should be 1-3/4" or 1-1/2".'})
    api.lists.createNote(id, {text: 'Mortise should be narrower; have less iron play.'})
    api.lists.createNote(id, {text: 'Thinner walls.'})
    api.lists.createNote(id, {text: 'How to grasp front comfortably?'})
    api.lists.createNote(id, {text: 'How to push back comfortably? Should it be slightly raised?'})
    api.lists.createNote(id, {text: 'Don\'t break out walls when inserting cross pin.'})
  }

}

export default useNormalDataset
