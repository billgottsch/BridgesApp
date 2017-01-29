
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity, Modal, Text, TextInput, View, Image, ScrollView, ListView } from 'react-native';
import HideableView from 'react-native-hideable-view';

import StatusBarBackground from './StatusBarBackground';
import styles from './Styles';
import exitMap from './ExitDoorMap.jpg';
import FAIcon from 'react-native-vector-icons/FontAwesome';


const careerPurple = [
  {title:'Advertising Representative', description:'Sell or solicit advertising space, time, or media in publications, signage, TV, radio, or Internet establishments or public spaces.', education:'High school diploma or equivalent', wages:'$19.99 to $39.76', color:'#CB3795'},
  {title:'Application Developer', description:'Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. May analyze and design databases within an application area, working individually or coordinating database development as part of a team. May supervise computer programmers.', education:'Bachelor\'s degree', wages:'$35.11 to $54.84', color:'#CB3795'},
  {title:'Computer and Information Systems Manager', description:'Plan, direct, or coordinate activities in such fields as electronic data processing, information systems, systems analysis, and computer programming', education:'Bachelor\'s degree', wages:'$52.72 to $76.24', color:'#CB3795'},
  {title:'Creative Serices Manager', description:'Formulate design concepts and presentation approaches for visual communications media, such as print, broadcasting, and advertising. Direct workers engaged in art work or layout design.', education:'Bachelor\'s degree', wages:'$28.35 to $47.22', color:'#CB3795'},
  {title:'Information Security Analyst', description:'Plan, implement, upgrade, or monitor security measures for the protection of computer networks and information. May ensure appropriate security controls are in place that will safeguard digital files and vital electronic infrastructure. May respond to computer security breaches and viruses.', education:'Bachelor\'s degree', wages:'$34.29 to $51.67', color:'#CB3795'},
  {title:'Database Administrator', description:'Administer, test, and implement computer databases, applying knowledge of database management systems. Coordinate changes to computer databases. May plan, coordinate, and implement security measures to safeguard computer databases.', education:'Bachelor\'s degree', wages:'$34.68 to $53.01', color:'#CB3795'},
  {title:'Graphic Designer', description:'Design or create graphics to meet specific commercial or promotional needs, such as packaging, displays, or logos. May use a variety of mediums to achieve artistic or decorative effects.', education:'Bachelor\'s degree', wages:'$20.10 to $31.12', color:'#CB3795'},
  {title:'Help Desk Support Tech', description:'Provide technical assistance to computer users. Answer questions or resolve computer problems for clients in person, or via telephone or electronically. May provide assistance concerning the use of computer hardware and software, including printing, installation, word processing, electronic mail, and operating systems.', education:'Some college, no degree', wages:'$19.82 to $32.51', color:'#CB3795'},
  {title:'Computer and Information Systems Manager', description:'Plan, direct, or coordinate activities in such fields as electronic data processing, information systems, systems analysis, and computer programming.', education:'Bachelor\'s degree', wages:'$52.72 to $76.24', color:'#CB3795'},
  {title:'Computer Programmer', description:'Create, modify, and test the code, forms, and script that allow computer applications to run. Work from specifications drawn up by software developers or other individuals. May assist software developers by analyzing user needs and designing software solutions. May develop and write computer programs to store, locate, and retrieve specific documents, data, and information.', education:'Bachelor\'s degree', wages:'$31.31 to $44.80', color:'#CB3795'},
  {title:'Marketing Director', description:'Plan, direct, or coordinate marketing policies and programs, such as determining the demand for products and services offered by a firm and its competitors, and identify potential customers. Develop pricing strategies with the goal of maximizing the firm\'s profits or share of the market while ensuring the firm\'s customers are satisfied. Oversee product development or monitor trends that indicate the need for new products and services.', education:'Bachelor\'s degree', wages:'$47.82 to $79.56', color:'#CB3795'},
  {title:'Computer Network Architect', description:'Design and implement computer and information networks, such as local area networks (LAN), wide area networks (WAN), intranets, extranets, and other data communications networks. Perform network modeling, analysis, and planning. May also design network and computer security measures. May research and recommend network and data communications hardware and software.', education:'Bachelor\'s degree', wages:'$40.41 to $58.49', color:'#CB3795'},
  {title:'Photographer', description:'Photograph people, landscapes, merchandise, or other subjects, using digital or film cameras and equipment. May develop negatives or use computer software to produce finished images and prints. Includes scientific photographers, aerial photographers, and photojournalists.', education:'High school diploma or equivalent', wages:'varies greatly', color:'#CB3795'},
  {title:'Quality Assurance Inspector', description:'Inspect, test, sort, sample, or weigh nonagricultural raw materials or processed, machined, fabricated, or assembled parts or products for defects, wear, and deviations from specifications. May use precision measuring instruments and complex test equipment.', education:'High school diploma or equivalent', wages:'$15.24 to $23.75', color:'#CB3795'},
  {title:'Software Developer', description:'Research, design, develop, and test operating systems-level software, compilers, and network distribution software for medical, industrial, military, communications, aerospace, business, scientific, and general computing applications. Set operational specifications and formulate and analyze software requirements. May design embedded systems software. Apply principles and techniques of computer science, engineering, and mathematical analysis.', education:'Bachelor\'s degree', wages:'$41.25 to $62.71', color:'#CB3795'},
  {title:'System Administrator', description:'Install, configure, and support an organization’s local area network (LAN), wide area network (WAN), and Internet systems or a segment of a network system. Monitor network to ensure network availability to all system users and may perform necessary maintenance to support network availability. May monitor and test Web site performance to ensure Web sites operate correctly and without interruption. May assist in network modeling, analysis, planning, and coordination between network and data communications hardware and software. May supervise computer user support specialists and computer network support specialists. May administer network security measures.', education:'Bachelor\'s degree', wages:'$32.72 to $49.19', color:'#CB3795'},
  {title:'Camera Operator', description:'Operate television, video, or motion picture camera to record images or scenes for various purposes, such as TV broadcasts, advertising, video production, or motion pictures.', education:'Bachelor\'s degree', wages:'$14.83 to $23.38', color:'#CB3795'},
  {title:'Film and Video Editor', description:'Edit moving images on film, video, or other media. May edit or synchronize soundtracks with images.', education:'Bachelor\'s degree', wages:'$15.72 to $31.68', color:'#CB3795'},
  {title:'Web Developer', description:'Design, create, and modify Web sites. Analyze user needs to implement Web site content, graphics, performance, and capacity. May integrate Web sites with other computer applications. May convert written, graphic, audio, and video components to compatible Web formats by using software designed to facilitate the creation of Web and multimedia content.', education:'Associate\'s degree', wages:'$23.45 to $43.32', color:'#CB3795'},

]

const careerYellow = [
  {title:'Accountant', description:'Examine, analyze, and interpret accounting records to prepare financial statements, give advice, or audit and evaluate statements prepared by others. Install or advise on systems of recording costs or other financial and budgetary data.', education:'Bachelor\'s degree', wages:'$26.31 to $40.11', color:'#F2EB39'},
  {title:'Building Maintenance Worker', description:'Perform work involving the skills of two or more maintenance or craft occupations to keep machines, mechanical equipment, or the structure of an establishment in repair. Duties may involve pipe fitting; boiler making; insulating; welding; machining; carpentry; repairing electrical or mechanical equipment; installing, aligning, and balancing new equipment; and repairing buildings, floors, or stairs. ', education:'High school diploma or equivalent', wages:'$17.22 to $26.48', color:'#F2EB39'},
  {title:'Business Banker/Loan Officer', description:'Evaluate, authorize, or recommend approval of commercial, real estate, or credit loans. Advise borrowers on financial status and payment methods. Includes mortgage loan officers and agents, collection analysts, loan servicing officers, and loan underwriters.', education:'Bachelor\'s degree', wages:'$27.20 to $50.23', color:'#F2EB39'},
  {title:'Chef', description:'Direct and may participate in the preparation, seasoning, and cooking of salads, soups, fish, meats, vegetables, desserts, or other foods. May plan and price menu items, order supplies, and keep records and accounts.', education:'High school diploma or equivalent', wages:'$16.35 to $29.12', color:'#F2EB39'},
  {title:'Economist', description:'Conduct research, prepare reports, or formulate plans to address economic problems related to the production and distribution of goods and services or monetary and fiscal policy. May collect and process economic and statistical data using sampling techniques and econometric methods.', education:'Master\'s degree', wages:'$24.48 to $36.07', color:'#F2EB39'},
  {title:'Cosmetologist', description:'Provide beauty services, such as shampooing, cutting, coloring, and styling hair, and massaging and treating scalp. May apply makeup, dress wigs, perform hair removal, and provide nail and skin care services.', education:'Postsecondary non-degree award', wages:'$9.48 to $16.58', color:'#F2EB39'},
  {title:'Customer Service Representative', description:'Interact with customers to provide information in response to inquiries about products and services and to handle and resolve complaints. ', education:'High school diploma or equivalent', wages:'$15.18 to $23.05', color:'#F2EB39'},
  {title:'Gaming Dealer', description:'Operate table games. Stand or sit behind table and operate games of chance by dispensing the appropriate number of cards or blocks to players, or operating other gaming equipment. Distribute winnings or collect players\' money or chips. May compare the house\'s hand against players\' hands.', education:'High school diploma or equivalent', wages:'$8.52 to $9.34', color:'#F2EB39'},
  {title:'Financial Advisor', description:'Advise clients on financial plans using knowledge of tax and investment strategies, securities, insurance, pension plans, and real estate. Duties include assessing clients\' assets, liabilities, cash flow, insurance coverage, tax status, and financial objectives.', education:'Bachelor\'s degree', wages:'$30.02 to $72.24', color:'#F2EB39'},
  {title:'Human Resource Manager', description:'Plan, direct, or coordinate human resources activities and staff of an organization.', education:'Bachelor\'s degree', wages:'$41.39 to $71.27', color:'#F2EB39'},
  {title:'Insurance Agent', description:'Sell life, property, casualty, health, automotive, or other types of insurance. May refer clients to independent brokers, work as an independent broker, or be employed by an insurance company.', education:'High school diploma or equivalent', wages:'$24.01 to $66.94', color:'#F2EB39'},
  {title:'Manicurist/Pedicurist', description:'Clean and shape customers\' fingernails and toenails. May polish or decorate nails.', education:'Postsecondary non-degree award', wages:'$9.91 to $13.47', color:'#F2EB39'},
  {title:'Reporters and Correspondents', description:'Collect and analyze facts about newsworthy events by interview, investigation, or observation. Report and write stories for newspaper, news magazine, radio, or television.', education:'Bachelor\'s degree', wages:'$18.58 to $36.99', color:'#F2EB39'},
  {title:'Realtor', description:'Rent, buy, or sell property for clients. Perform duties, such as study property listings, interview prospective clients, accompany clients to property site, discuss conditions of sale, and draw up real estate contracts. Includes agents who represent buyer.', education:'High school diploma or equivalent', wages:'$13.41 to $32.40', color:'#F2EB39'},
  {title:'Skin Care Specialist', description:'Provide skincare treatments to face and body to enhance an individual’s appearance. Includes electrologists and laser hair removal specialists.', education:'Postsecondary non-degree award', wages:'$11.23 to $20.81', color:'#F2EB39'},
  {title:'Teller', description:'Receive and pay out money. Keep records of money and negotiable instruments involved in a financial institution\'s various transactions.', education:'High school diploma or equivalent', wages:'$10.83 to $14.95', color:'#F2EB39'},

]

const careerOrange = [
  {title:'Air Traffic Controller', description:'Control air traffic on and within vicinity of airport and movement of air traffic between altitude sectors and control centers according to established procedures and policies. Authorize, regulate, and control commercial airline flights according to government or company regulations to expedite and ensure flight safety.', education:'Associate\'s degree', wages:'$61.92 to $78.71', color:'#F79835'},
  {title:'Arcitectural and Civil Drafter', description:'Prepare detailed drawings of architectural and structural features of buildings or drawings and topographical relief maps used in civil engineering projects, such as highways, bridges, and public works. Use knowledge of building materials, engineering practices, and mathematics to complete drawings.', education:'Associate\'s degree', wages:'$21.95 to $30.41', color:'#F79835'},
  {title:'Auto Mechanic', description:'Diagnose, adjust, repair, or overhaul automotive vehicles.', education:'High school diploma or equivalent', wages:'$15.79 to $25.37', color:'#F79835'},
  {title:'Autobody Repair Expert', description:'Repair and refinish automotive vehicle bodies and straighten vehicle frames.', education:'High school diploma or equivalent', wages:'$18.17 to $29.07', color:'#F79835'},
  {title:'Avionics Technician', description:'Install, inspect, test, adjust, or repair avionics equipment, such as radar, radio, navigation, and missile control systems in aircraft or space vehicles.', education:'Associate\'s degree', wages:'$24.32 to $29.53', color:'#F79835'},
  {title:'Carpenter', description:'Construct, erect, install, or repair structures and fixtures made of wood, such as concrete forms; building frameworks, including partitions, joists, studding, and rafters; and wood stairways, window and door frames, and hardwood floors. May also install cabinets, siding, drywall and batt or roll insulation. Includes brattice builders who build doors or brattices (ventilation walls or partitions) in underground passageways', education:'High school diploma or equivalent', wages:'$20.55 to $34.07', color:'#F79835'},
  {title:'Civil Engineer', description:'Perform engineering duties in planning, designing, and overseeing construction and maintenance of building structures, and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation projects, pipelines, power plants, and water and sewage systems. Includes architectural, structural, traffic, ocean, and geo-technical engineers.', education:'Bachelor\'s degree', wages:'$31.89 to $48.80', color:'#F79835'},
  {title:'CAD CAM Programmer', description:'Develop programs to control machining or processing of metal or plastic parts by automatic machine tools, equipment, or systems.', education:'High school diploma or equivalent', wages:'$22.80 to $29.85', color:'#F79835'},
  {title:'Commercial Pilot', description:'Pilot and navigate the flight of fixed-wing aircraft on nonscheduled air carrier routes, or helicopters. Requires Commercial Pilot certificate. Includes charter pilots with similar certification, and air ambulance and air tour pilots. Excludes regional, National, and international airline pilots.', education:'High school diploma or equivalent', wages:'$45,396.69 to $129,524.24 annually', color:'#F79835'},
  {title:'Diesel Mecanic', description:'Diagnose, adjust, repair, or overhaul buses and trucks, or maintain and repair any type of diesel engines. Includes mechanics working primarily with automobile or marine diesel engines.', education:'High school diploma or equivalent', wages:'$20.32 to $28.17', color:'#F79835'},
  {title:'Electrical and Electronics Drafter', description:'Prepare wiring diagrams, circuit board assembly diagrams, and layout drawings used for the manufacture, installation, or repair of electrical equipment.', education:'Associate\'s degree', wages:'$21.12 to $30.25', color:'#F79835'},
  {title:'Electromechanical Assembler', description:'Assemble or modify electromechanical equipment or devices, such as servomechanisms, gyros, dynamometers, magnetic drums, tape drives, brakes, control linkage, actuators, and appliances.', education:'High school diploma or equivalent', wages:'$13.66 to $19.54', color:'#F79835'},
  {title:'Electrical Assembler', description:'Assemble or modify electrical or electronic equipment, such as computers, test equipment telemetering systems, electric motors, and batteries.', education:'High school diploma or equivalent', wages:'$13.74 to $18.53', color:'#F79835'},
  {title:'Electrical Engineer', description:'Research, design, develop, test, or supervise the manufacturing and installation of electrical equipment, components, or systems for commercial, industrial, military, or scientific use.', education:'Bachelor\'s degree', wages:'$35.01 to $54.04', color:'#F79835'},
  {title:'Electrical Line Worker', description:'Install or repair cables or wires used in electrical power or distribution systems. May erect poles and light or heavy duty transmission towers. ', education:'High school diploma or equivalent', wages:'$29.03 to $43.26', color:'#F79835'},
  {title:'Electrician', description:'Install, maintain, and repair electrical wiring, equipment, and fixtures. Ensure that work is in accordance with relevant codes. May install or service street lights, intercom systems, or electrical control systems.', education:'High school diploma or equivalent', wages:'$21.18 to $37.67', color:'#F79835'},
  {title:'HVAC/R Service Technician', description:'Install or repair heating, central air conditioning, or refrigeration systems, including oil burners, hot-air furnaces, and heating stoves.', education:'Postsecondary non-degree award', wages:'$21.14 to $34.92', color:'#F79835'},
  {title:'Marine/Small Engine Technician', description:'Diagnose, adjust, repair, or overhaul small engines used to power lawn mowers, chain saws, recreational sporting equipment and related equipment.', education:'High school diploma or equivalent', wages:'$13.92 to $19.65', color:'#F79835'},
  {title:'Surveyor', description:'Make exact measurements and determine property boundaries. Provide data relevant to the shape, contour, gravitation, location, elevation, or dimension of land or land features on or near the earth\'s surface for engineering, mapmaking, mining, land evaluation, construction, and other purposes.', education:'Bachelor\'s degree', wages:'$27.85 to $46.23', color:'#F79835'},
  {title:'Welder, Solderer, Cutter and Brazers', description:'Use hand-welding, flame-cutting, hand soldering, or brazing equipment to weld or join metal components or to fill holes, indentations, or seams of fabricated metal products.', education:'High school diploma or equivalent', wages:'$17.45 to $25.59', color:'#F79835'},

]

const careerBlack = []

const careerRed = [
  {title:'Audiologist', description:'Assess and treat persons with hearing and related disorders. May fit hearing aids and provide auditory training. May perform research related to hearing problems.', education:'Doctoral or professional degree', wages:'$31.92 to $38.35', color:'#EA2430'},
  {title:'Biomedical Technician', description:'Apply knowledge of engineering, biology, and biomechanical principles to the design, development, and evaluation of biological and health systems and products, such as artificial organs, prostheses, instrumentation, medical information systems, and heath management and care delivery systems.', education:'Bachelor\'s degree', wages:'$35.09 to $58.66', color:'#EA2430'},
  {title:'Clinical Nurse Specialist', description:'Assess patient health problems and needs, develop and implement nursing care plans, and maintain medical records. Administer nursing care to ill, injured, convalescent, or disabled patients. May advise patients on health maintenance and disease prevention or provide case management.', education:'Licensing or registration required. Associate\'s degree', wages:'$31.47 to $44.53', color:'#EA2430'},
  {title:'Dental Assistant', description:'Assist dentist, set up equipment, prepare patient for treatment, and keep records.', education:'Postsecondary non-degree award', wages:'$19.09 to $24.64', color:'#EA2430'},
  {title:'Dietitian', description:'Plan and conduct food service or nutritional programs to assist in the promotion of health and control of disease. May supervise activities of a department providing quantity food services, counsel individuals, or conduct nutritional research.', education:'Bachelor\'s degree', wages:'$24.32 to $32.74', color:'#EA2430'},
  {title:'Exercise Physiologist', description:'Assess, plan, or implement fitness programs that include exercise or physical activities such as those designed to improve cardiorespiratory function, body composition, muscular strength, muscular endurance, or flexibility.', education:'Bachelor\'s degree', wages:'$25.70 to $33.48', color:'#EA2430'},
  {title:'Medical and Health Services Manager', description:'Plan, direct, or coordinate medical and health services in hospitals, clinics, managed care organizations, public health agencies, or similar organizations.', education:'Bachelor\'s degree', wages:'$38.23 to $59.84', color:'#EA2430'},
  {title:'Home Health Aide', description:'Provide routine individualized healthcare such as changing bandages and dressing wounds, and applying topical medications to the elderly, convalescents, or persons with disabilities at the patient’s home or in a care facility. Monitor or report changes in health status. May also provide personal care such as bathing, dressing, and grooming of patient.', education:'Less than high school', wages:'$11.15 to $14.19', color:'#EA2430'},
  {title:'Infection Control Nurse', description:'Investigate and describe the determinants and distribution of disease, disability, or health outcomes. May develop the means for prevention and control.', education:'Master\'s degree', wages:'$27.16 to $41.93', color:'#EA2430'},
  {title:'Licensed Practical Nurse', description:'Care for ill, injured, or convalescing patients or persons with disabilities in hospitals, nursing homes, clinics, private homes, group homes, and similar institutions. May work under the supervision of a registered nurse. Licensing required.', education:'Postsecondary non-degree award', wages:'$19.89 to $23.58', color:'#EA2430'},
  {title:'Massage Therapist', description:'Perform therapeutic massages of soft tissues and joints. May assist in the assessment of range of motion and muscle strength, or propose client therapy plans.', education:'Postsecondary non-degree award', wages:'$16.09 to $27.73', color:'#EA2430'},
  {title:'Medical Assistants', description:'Perform administrative and certain clinical duties under the direction of a physician. Administrative duties may include scheduling appointments, maintaining medical records, billing, and coding information for insurance purposes. Clinical duties may include taking and recording vital signs and medical histories, preparing patients for examination, drawing blood, and administering medications as directed by physician.', education:'Postsecondary non-degree award', wages:'$15.67 to $19.84', color:'#EA2430'},
  {title:'Nursing Asssistant', description:'Provide basic patient care under direction of nursing staff. Perform duties such as feed, bathe, dress, groom, or move patients, or change linens. May transfer or transport patients. Includes nursing care attendants, nursing aides, and nursing attendants. ', education:'Postsecondary non-degree award', wages:'$12.86 to $17.45', color:'#EA2430'},
  {title:'Pharmacist', description:'Dispense drugs prescribed by physicians and other health practitioners and provide information to patients about medications and their use. May advise physicians and other health practitioners on the selection, dosage, interactions, and side effects of medications.', education:'Doctoral or professional degree', wages:'$53.85 to $68.90', color:'#EA2430'},
  {title:'Phlebotomist', description:'Draw blood for tests, transfusions, donations, or research. May explain the procedure to patients and assist in the recovery of patients with adverse reactions.', education:'Postsecondary non-degree award', wages:'$14.01 to $19.33', color:'#EA2430'},
  {title:'Physical Therapist', description:'Assess, plan, organize, and participate in rehabilitative programs that improve mobility, relieve pain, increase strength, and improve or correct disabling conditions resulting from disease or injury.', education:'Doctoral or professional degree', wages:'$33.01 to $42.42', color:'#EA2430'},
  {title:'Radiologic Technologist', description:'Take x rays and CAT scans or administer nonradioactive materials into patient\'s blood stream for diagnostic purposes. Includes technologists who specialize in other scanning modalities.', education:'Associate\'s degree', wages:'$26.62 to $35.61', color:'#EA2430'},
  {title:'Registered Nurse', description:'Assess patient health problems and needs, develop and implement nursing care plans, and maintain medical records. Administer nursing care to ill, injured, convalescent, or disabled patients. May advise patients on health maintenance and disease prevention or provide case management. Licensing or registration required.', education:'Associate\'s degree', wages:'$31.47 to $44.53', color:'#EA2430'},
  {title:'Respiratory Therapists', description:'Assess, treat, and care for patients with breathing disorders. Assume primary responsibility for all respiratory care modalities, including the supervision of respiratory therapy technicians. Initiate and conduct therapeutic procedures; maintain patient records; and select, assemble, check, and operate equipment.', education:'Associate\'s degree', wages:'$28.07 to $35.62', color:'#EA2430'},
  {title:'Surgical Tech', description:'Assist in operations, under the supervision of surgeons, registered nurses, or other surgical personnel. May help set up operating room, prepare and transport patients for surgery, adjust lights and equipment, pass instruments and other supplies to surgeons and surgeon\'s assistants, hold retractors, cut sutures, and help count sponges, needles, supplies, and instruments.', education:'Postsecondary non-degree award', wages:'$22.24 to $28.53', color:'#EA2430'},

]

const careerGreen = [
  {title:'Agronomist', description:'Conduct research in breeding, physiology, production, yield, and management of crops and agricultural plants or trees, shrubs, and nursery stock, their growth in soils, and control of pests; or study the chemical, physical, biological, and mineralogical composition of soils as they relate to plant or crop growth. May classify and map soils and investigate effects of alternative practices on soil and crop productivity.', education:'Bachelor\'s degree', wages:'$20.00 to $41.25', color:'#57B74F'},
  {title:'Animal Health Technician', description:'Perform medical tests in a laboratory environment for use in the treatment and diagnosis of diseases in animals. Prepare vaccines and serums for prevention of diseases. Prepare tissue samples, take blood samples, and execute laboratory tests, such as urinalysis and blood counts. Clean and sterilize instruments and materials and maintain equipment and machines. May assist a veterinarian during surgery.', education:'Associate\'s degree', wages:'$15.56 to $19.93', color:'#57B74F'},
  {title:'Animal Scientist', description:'Conduct research in the genetics, nutrition, reproduction, growth, and development of domestic farm animals.', education:'Doctoral or professional degree', wages:'varies', color:'#57B74F'},
  {title:'Biologist', description:'Study the origins, behavior, diseases, genetics, and life processes of animals and wildlife. May specialize in wildlife research and management. May collect and analyze biological data to determine the environmental effects of present and potential use of land and water habitats.', education:'Bachelor\'s degree', wages:'$22.84 to $31.28', color:'#57B74F'},
  {title:'Forester', description:'Manage public and private forested lands for economic, recreational, and conservation purposes. May inventory the type, amount, and location of standing timber, appraise the timber\'s worth, negotiate the purchase, and draw up contracts for procurement. May determine how to conserve wildlife habitats, creek beds, water quality, and soil stability, and how best to comply with environmental regulations. May devise plans for planting and growing new trees, monitor trees for healthy growth, and determine optimal harvesting schedules.', education:'Bachelor\'s degree', wages:'$25.40 to $34.86', color:'#57B74F'},
  {title:'Hydrologist', description:'Research the distribution, circulation, and physical properties of underground and surface waters; and study the form and intensity of precipitation, its rate of infiltration into the soil, movement through the earth, and its return to the ocean and atmosphere.', education:'Master\'s degree', wages:'$31.29 to $41.51', color:'#57B74F'},
  {title:'Nutritionist', description:'Plan and conduct food service or nutritional programs to assist in the promotion of health and control of disease. May supervise activities of a department providing quantity food services, counsel individuals, or conduct nutritional research.', education:'Bachelor\'s degree', wages:'$24.32 to $32.74', color:'#57B74F'},

]

const careerBlue = [
  {title:'Corrections Officer', description:'Guard inmates in penal or rehabilitative institutions in accordance with established regulations and procedures. May guard prisoners in transit between jail, courtroom, prison, or other point. Includes deputy sheriffs and police who spend the majority of their time guarding prisoners in correctional institutions.', education:'High school diploma or equivalent', wages:'$20.28 to $27.39', color:'#6DCCEF'},
  {title:'Dispatcher', description:'Operate radio, telephone, or computer equipment at emergency response centers. Receive reports from the public of crimes, disturbances, fires, and medical or police emergencies. Relay information to law enforcement and emergency response personnel. May maintain contact with caller until responders arrive.', education:'High school diploma or equivalent', wages:'$22.57 to $29.69', color:'#6DCCEF'},
  {title:'Firefighter', description:'Control and extinguish fires or respond to emergency situations where life, property, or the environment is at risk. Duties may include fire prevention, emergency medical service, hazardous material response, search and rescue, and disaster assistance.', education:'Postsecondary non-degree award', wages:'$12.37 to $19.90', color:'#6DCCEF'},
  {title:'Criminal Investigator', description:'Conduct investigations related to suspected violations of Federal, State, or local laws to prevent or solve crimes.', education:'High school diploma or equivalent', wages:'$27.53 to $44.71', color:'#6DCCEF'},
  {title:'Nanny', description:'Attend to children at schools, businesses, private households, and childcare institutions. Perform a variety of tasks, such as dressing, feeding, bathing, and overseeing play. ', education:'High school diploma or equivalent', wages:'varies greatly', color:'#6DCCEF'},
  {title:'Paramedic', description:'Assess injuries, administer emergency medical care, and extricate trapped individuals. Transport injured or sick persons to medical facilities.', education:'Postsecondary non-degree award', wages:'$18.22 to $29.88', color:'#6DCCEF'},
  {title:'Special Education Teacher', description:'Teach preschool school subjects to educationally and physically handicapped students. Includes teachers who specialize and work with audibly and visually handicapped students and those who teach basic academic and life processes skills to the mentally impaired.', education:'Bachelor\'s degree', wages:'$46,863.31 to $76,849.82 annual', color:'#6DCCEF'},
  {title:'City, County, Tribal and State Patrol Officer', description:'Maintain order and protect life and property by enforcing local, tribal, State, or Federal laws and ordinances. Perform a combination of the following duties- patrol a specific area; direct traffic; issue traffic summonses; investigate accidents; apprehend and arrest suspects, or serve legal processes of courts.', education:'High school diploma or equivalent', wages:'$29.89 to $36.62', color:'#6DCCEF'},
  {title:'Preschool Teacher', description:'Instruct preschool-aged children in activities designed to promote social, physical, and intellectual growth needed for primary school in preschool, day care center, or other child development facility. ', education:'Associate\'s degree', wages:'$13.32 to $19.74', color:'#6DCCEF'},
  {title:'Child, Family and School Social Worker', description:'Provide social services and assistance to improve the social and psychological functioning of children and their families and to maximize the family well-being and the academic functioning of children. May assist parents, arrange adoptions, and find foster homes for abandoned or abused children. In schools, they address such problems as teenage pregnancy, misbehavior, and truancy. May also advise teachers.', education:'Bachelor\'s degree', wages:'$21.19 to $36.69', color:'#6DCCEF'},

]
var clusterStyle = {
  paddingTop:10,
  flexDirection:'column',
  paddingBottom:10,
  margin:0,
  width:36,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderStyle:'solid',
  borderTopRightRadius: 35,
  borderBottomRightRadius: 35,
  borderTopLeftRadius:35,
  borderBottomLeftRadius: 35,
}

var clusterCareerStyle = {
  paddingTop:10,
  flexDirection:'column-reverse',
  paddingBottom:10,
  width: 22,
  margin:0,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderStyle:'solid',
  borderTopRightRadius: 35,
  borderBottomRightRadius: 35,
  borderTopLeftRadius:35,
  borderBottomLeftRadius: 35,
}

export default class ListofCareers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalCareer:{color:'white'},

      careerPurple: careerPurple,
      careerYellow: careerYellow,
      careerOrange: careerOrange,
      careerBlack: careerBlack,
      careerRed: careerRed,
      careerGreen: careerGreen,
      careerBlue: careerBlue,
  };
}


  toggleCluster(color) {

    if (this.state.visibleCluster === color) {
      this.setState({visibleCluster: null})

    } else {
      this.setState({visibleCluster: color})
    }
  }

  setModalVisible(visible, career) {
    this.setState({
      modalCareer: career,
      modalVisible: visible,
    });
  }

render() {
  return(
      <ScrollView style={{backgroundColor:'#88B467'}}>
        {this.state.modalVisible ? <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <ScrollView>
            <View style={{backgroundColor:this.state.modalCareer.color, height:100, flexDirection:'row', alignItems:'center', marginBottom:20, padding:0,  }}>
              <TouchableOpacity
                style={{height:40, width:40, padding:5,}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
              }}>
              <FAIcon key='first' type='icon' name='times' size={25}/>
              </TouchableOpacity>
              <Text style={{fontSize:24, fontWeight:'bold', marginRight:40, flex: 2, textAlign: 'center',}}>
                {this.state.modalCareer.title}
              </Text>
            </View>
            <View>
              <Text style={styles.modalCareerNameFirst}>What schooling do you need?</Text>
              <Text style={styles.modalCareerData}>{this.state.modalCareer.education}</Text>
              <Text style={styles.modalCareerName}>What do they do?</Text>
              <Text style={styles.modalCareerData}>{this.state.modalCareer.description}</Text>
              <Text style={styles.modalCareerName}>Typical pay range(per hour)</Text>
              <Text style={styles.modalCareerData}>{this.state.modalCareer.wages}</Text>
              <Text style={{marginTop:100, marginBottom:40, textAlign:'center', color: '#ccc'}}>powered by MN DEED</Text>
            </View>
        </ScrollView>
        </Modal> : null }

        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, marginLeft:40, marginRight:40,marginBottom:10, marginTop:20}}>Take a look at the careers represented today!</Text>
        <View style={{flex:1, marginTop:10 ,justifyContent:'center'}}>
            <TouchableOpacity style={styles.businessPageTextWrapper} onPress={this.toggleCluster.bind(this, 'purple')}>
                <View style={[clusterStyle,{
                  backgroundColor:'#CB3795',
                  borderColor:'#CB3795',
                }]}>

                  <Text style={styles.businessPageColorBox}>
                  </Text>
                </View>
                <Text style={styles.businessPageTextTitle}>Computer and IT</Text>
            </TouchableOpacity>
            <HideableView
              removeWhenHidden={true}
              visible={this.state.visibleCluster === 'purple'}>
                {this.state.careerPurple.map((career, index) =>{
                  return (
                      <View key={index}>
                        <TouchableOpacity style={styles.businessWrapper} onPress={() => {
                            this.setModalVisible(true, career)
                        }}>
                        <View style={[clusterCareerStyle,{
                          borderColor:'#CB3795',
                          backgroundColor:'#CB3795',
                        }]} >
                        </View>
                          <Text style={styles.businessNames}>{career.title}</Text>
                        </TouchableOpacity>
                      </View>)
                })}
            </HideableView>
          <TouchableOpacity style={styles.businessPageTextWrapper} onPress={this.toggleCluster.bind(this, 'red')}>
            <View style={[clusterStyle,{
              backgroundColor:'#EA2430',
              borderColor:'#EA2430',
            }]}>
              <Text style={styles.businessPageColorBox}>
              </Text>
            </View>
            <Text style={styles.businessPageTextTitle}>Health Services</Text>
            </TouchableOpacity>
            <HideableView
              removeWhenHidden={true}
              visible={this.state.visibleCluster === 'red'}>
              {this.state.careerRed.map((career, index) =>{
                return (
                    <View key={index}>
                      <TouchableOpacity style={styles.businessWrapper} onPress={() => {
                         this.setModalVisible(true, career)
                      }}>
                      <View style={[clusterCareerStyle,{
                        borderColor:'#EA2430',
                        backgroundColor:'#EA2430',
                      }]} >
                      </View>
                        <Text style={styles.businessNames}>{career.title}</Text>
                      </TouchableOpacity>
                    </View>)
              })}
            </HideableView>

            <TouchableOpacity style={styles.businessPageTextWrapper} onPress={this.toggleCluster.bind(this, 'yellow')}>
                <View style={[clusterStyle,{
                  backgroundColor:'#F2EB39',
                  borderColor:'#F2EB39',
                }]}>
                  <Text style={styles.businessPageColorBox}>
                  </Text>
                </View>
                <Text style={styles.businessPageTextTitle}>Business, Finance and Hospitality</Text>
            </TouchableOpacity>
            <HideableView
                removeWhenHidden={true}
                visible={this.state.visibleCluster === 'yellow'}>
              {this.state.careerYellow.map((career, index) =>{
                return (
                    <View key={index}>
                      <TouchableOpacity style={styles.businessWrapper} onPress={() => {
                         this.setModalVisible(true, career)
                      }}>
                      <View style={[clusterCareerStyle,{
                        borderColor:'#F2EB39',
                        backgroundColor:'#F2EB39',
                      }]} >
                      </View>
                        <Text style={styles.businessNames}>{career.title}</Text>
                      </TouchableOpacity>
                    </View>)
              })}
            </HideableView>

            <TouchableOpacity style={styles.businessPageTextWrapper} onPress={this.toggleCluster.bind(this, 'orange')}>
              <View style={[clusterStyle,{
                backgroundColor:'#F79835',
                borderColor:'#F79835',
              }]}>
                <Text style={styles.businessPageColorBox}>
                </Text>
              </View>
              <Text style={styles.businessPageTextTitle}>
                Engineering, Const., Manuf., Automotive
              </Text>

            </TouchableOpacity>
            <HideableView
                removeWhenHidden={true}
                visible={this.state.visibleCluster === 'orange'}>
              {this.state.careerOrange.map((career, index) =>{
                return (
                    <View key={index}>
                      <TouchableOpacity style={styles.businessWrapper} onPress={() => {
                         this.setModalVisible(true, career)
                      }}>
                      <View style={[clusterCareerStyle,{
                        borderColor:'#F79835',
                        backgroundColor:'#F79835',
                      }]} >
                      </View>
                        <Text style={styles.businessNames}>{career.title}</Text>
                      </TouchableOpacity>
                    </View>)
              })}
            </HideableView>

            <TouchableOpacity style={styles.businessPageTextWrapper} onPress={this.toggleCluster.bind(this, 'green')}>
              <View style={[clusterStyle,{
                backgroundColor:'#57B74F',
                borderColor:'#57B74F',
              }]}>
                <Text style={styles.businessPageColorBox}>
                </Text>
              </View>
              <Text style={styles.businessPageTextTitle}>Ag. Food and Natural Resources</Text>
            </TouchableOpacity>
            <HideableView
                removeWhenHidden={true}
                visible={this.state.visibleCluster === 'green'}>
              {this.state.careerGreen.map((career, index) =>{
                return (
                    <View key={index}>
                      <TouchableOpacity style={styles.businessWrapper} onPress={() => {
                         this.setModalVisible(true, career)
                      }}>
                      <View style={[clusterCareerStyle,{
                        borderColor:'#57B74F',
                        backgroundColor:'#57B74F',
                      }]} >
                      </View>
                        <Text style={styles.businessNames}>{career.title}</Text>
                      </TouchableOpacity>
                    </View>)
              })}
            </HideableView>

            <TouchableOpacity style={styles.businessPageTextWrapper} onPress={this.toggleCluster.bind(this, 'blue')}>
              <View style={[clusterStyle,{
                backgroundColor:'#6DCCEF',
                borderColor:'#6DCCEF',
              }]}>
                <Text style={styles.businessPageColorBox}>
                </Text>
              </View>
              <Text style={styles.businessPageTextTitle}>Public Safety</Text>
            </TouchableOpacity>
            <HideableView
                removeWhenHidden={true}
                visible={this.state.visibleCluster === 'blue'}>
              {this.state.careerBlue.map((career, index) =>{
                return (
                    <View key={index}>
                      <TouchableOpacity style={styles.businessWrapper} onPress={() => {
                         this.setModalVisible(true, career)
                      }}>
                      <View style={[clusterCareerStyle,{
                        borderColor:'#6DCCEF',
                        backgroundColor:'#6DCCEF',
                      }]} >
                      </View>
                        <Text style={styles.businessNames}>{career.title}</Text>
                      </TouchableOpacity>
                    </View>)
              })}
            </HideableView>
          </View>
          <View style={{ marginBottom:150,}}>
        </View>
      </ScrollView>
    )
  }
}
