import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HideableView from 'react-native-hideable-view';

import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import Tabs from 'react-native-tabs';

import Navigation from './Navigation';
import ListOfBusinesses from './ListOfBusinesses';

const businessPurple = [
  {name:'Brainerd Dispatch', address:'506 James St.', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-4705', color:'#CB3795'},
  {name:'CLC - Art', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CLC - Communications Art & Design', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CLC - English', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CLC - Music', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CLC - Speech', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CLC - Videography', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'Lakes Printing', address:'1223 Oak St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-7790', color:'#CB3795'},
  {name:'Advance IT Minnesota', address:'Suite 104 Energy Park Place - 1380 Energy Lane', city:'St. Paul', state:'MN', zip:'55108', phone:'(612) 659-7221', color:'#CB3795'},
  {name:'Ascensus', address:'Brainerd Mall Shopping Center', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-0565', color:'#CB3795'},
  {name:'Best Buy', address:'14555 Edgewood Dr N', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 828-0700', color:'#CB3795'},
  {name:'Advance IT Minnesota', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'Advance IT Minnesota', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'Advance IT Minnesota', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'Advance IT Minnesota', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'Advance IT Minnesota', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CLC - Computer Technology', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#CB3795'},
  {name:'CTC - Consolidated Telephone Company', address:'1102 Madison St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 454-1234', color:'#CB3795'},
  {name:'Deerwood Technologies', address:'21301 Archibald Rd', city:'Deerwood', state:'MN', zip:'56444', phone:'(218) 534-5357', color:'#CB3795'},
  {name:'MSTATE - Computer & Networking', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#CB3795'},
  {name:'STEM Fuse', address:'304 Splitrock Blvd Suite 201', city:'Brandon', state:'SD', zip:'57005', phone:'(605) 413-5263', color:'#CB3795'},

]

const businessYellow = [
  {name:'Brained Lakes Chamber of Commerce', address:'224 W Washington St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-2838', color:'#F2EB39'},
  {name:'Brained Park and Recreation', address:'1619 Washington St NE', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-2320', color:'#F2EB39'},
  {name:'Breezy Point Resort', address:'9252 Breezy Point Drive', city:'Breezy Point', state:'MN', zip:'56472', phone:'1-800-432-3777', color:'#F2EB39'},
  {name:'Bremer Bank', address:'321 South 7th Street', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-8781', color:'#F2EB39'},
  {name:'CLC - Accounting', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F2EB39'},
  {name:'CLC - Business Management', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F2EB39'},
  {name:'CLC - Math', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F2EB39'},
  {name:'Deerwood Bank', address:'611 NE Washington St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-2111', color:'#F2EB39'},
  {name:'Grand Casino Mille Lacs', address:'777 Grand Ave', city:'Onamia', state:'MN', zip:'56359', phone:'(320) 532-7777', color:'#F2EB39'},
  {name:'Greater Lakes Association of Realtors', address:'15344 Pearl Dr', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 828-4567', color:'#F2EB39'},
  {name:'Grand View Lodge', address:'23521 Nokomis Ave', city:'Nisswa', state:'MN', zip:'56468', phone:'(866) 801-2951', color:'#F2EB39'},
  {name:'Heartwood Senior Living', address:'500 Heartwood Dr', city:'Crosby', state:'MN', zip:'56441', phone:'(218) 545-8500', color:'#F2EB39'},
  {name:'MSTATE - Cosmetology', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#F2EB39'},
  {name:'MSTATE - Culinary Arts', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#F2EB39'},
  {name:'MSTATE - Golf Management', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#F2EB39'},
  {name:'Prairie Bay', address:'15115 Edgewood Dr N', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 824-6444', color:'#F2EB39'},
  {name:'Ruttger\'s Bay Lake Lodge', address:'25039 Tame Fish Lake Rd', city:'Deerwood', state:'MN', zip:'56444', phone:'(218) 678-2885', color:'#F2EB39'},
  {name:'Jake from State Farm', address:'525 Washington St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 454-2888', color:'#F2EB39'},
  {name:'Wells Fargo', address:'424 W Washington St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-8618', color:'#F2EB39'},
]

const businessOrange = [
  {name:'Air Force Recruiting', address:'702 W. Washington', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-5545', color:'#F79835'},
  {name:'American Institute of Non-Destructive Testing', address:'7938 College Rd #100', city:'Baxter', state:'MN', zip:'56425', phone:'(855) 313-0325', color:'#F79835'},
  {name:'Bolton & Menk, Inc', address:'7656 Design Rd # 200', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 825-0684', color:'#F79835'},
  {name:'Brainerd Regiona Airport - Airmotive', address:'16384 Airport Rd', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 825-2166', color:'#F79835'},
  {name:'City of Brainerd', address:'501 Laurel St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-2307', color:'#F79835'},
  {name:'CLC - Engineering', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'Kadrmas, Lee & Jackson', address:'1024 Thiesse Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-6330', color:'#F79835'},
  {name:'Lake Superior Helicopters', address:'4525 Airport Approach Rd', city:'Duluth', state:'MN', zip:'55811', phone:'(218) 461-2857', color:'#F79835'},
  {name:'Widseth, Smith & Nolting', address:'7804 Industrial Park Rd S', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 829-5117', color:'#F79835'},
  {name:'CLC - Machine Tool Technology', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'CLC - Marine and Small Engines', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'Crow Wing Power', address:'17330 State Hwy 371', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-2827', color:'#F79835'},
  {name:'J-Berd', address:'3308 Southway Dr', city:'St. Cloud', state:'MN', zip:'56301', phone:'(320) 656-0847', color:'#F79835'},
  {name:'Ellingson Plumbing, Heating & AC', address:'2510 S Broadway St', city:'Alexandria', state:'MN', zip:'56308', phone:'(320) 656-0847', color:'#F79835'},
  {name:'Mid MN Builders Association', address:'17068 Commercial Park Rd', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-4982', color:'#F79835'},
  {name:'MSTATE - Electrical Technology', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#F79835'},
  {name:'MSTATE - Electrical Lineworker', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#F79835'},
  {name:'MSTATE - HVAC and Refrigeration', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#F79835'},
  {name:'SCR', address:'604 Lincoln Avenue St.', city:'St. Cloud', state:'MN', zip:'56301', phone:'(800) 827-1642', color:'#F79835'},
  {name:'Anderson Brothers', address:'11325 MN-210', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-1768', color:'orange'},
  {name:'Transportation Center of Excellence', address:'660 Mayhew Lake Rd NE', city:'St. Cloud', state:'MN', zip:'56304', phone:'(320) 774-1985', color:'#F79835'},
  {name:'CLC - Automotive Repair and Body', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'CLC - Diesel Mechanics', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'CLC - Heavy Equipment Maint/Operation', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'Mills Automotive Group', address:'512 Laurel St', city:'Brainerd', state:'MN', zip:'56401', phone:'(866) 455-7638', color:'#F79835'},
  {name:'The Bodyworks', address:'14742 Dellwood Dr N', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 825-3500', color:'#F79835'},
  {name:'U.S. Army & Reserve', address:'310 10th Ave NE', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-9352', color:'#F79835'},
  {name:'360, Manufacturing Center of Excellence', address:'1500 Birchmont Drive NE', city:'Bemidji', state:'MN', zip:'56601', phone:'(800) 627-3529', color:'#F79835'},
  {name:'Avantech', address:'1021 Madison St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-0110', color:'#F79835'},
  {name:'Central McGowan', address:'123 Roosevelt Rd', city:'St. Cloud', state:'MN', zip:'56301', phone:'(320) 252-5292', color:'#F79835'},
  {name:'CLC - AME', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'CLC - Machine Tool Technology', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'CLC - Robotics', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'CLC - Welding & Fabrication', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#F79835'},
  {name:'Clow Stamping', address:'23103 Co Rd 3', city:'Merrifield', state:'MN', zip:'56465', phone:'(218) 765-3111', color:'#F79835'},
  {name:'Dream It. Do It.', address:'1500 Birchmont Drive NE', city:'Bemidji', state:'MN', zip:'56601', phone:'(800) 627-3529', color:'#F79835'},
  {name:'Graphic Packaging Intl', address:'975 3rd St SW', city:'Crosby', state:'MN', zip:'56441', phone:'(218) 546-2100', color:'#F79835'},
  {name:'LINDAR Corp', address:'7789 Hastings Rd', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 546-2100', color:'#F79835'},

]

const businessBlack = [
  {name:'CLC - American Sign Language', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Child Development', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Earth Sciences', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Economics', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Geography', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Global Studies', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - History', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Honors', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - International Students', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Peace Corps', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Philosophy', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - PKE', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Political Science', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Psychology', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Spanish', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Sociology', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Theatre', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#231F20'},
  {name:'CLC - Women\'s Studies', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#FFF'},
]

const businessRed = [
  {name:'CLC - Biology', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#EA2430'},
  {name:'CLC - Dental', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#EA2430'},
  {name:'CLC - Medical Assistant', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#EA2430'},
  {name:'CLC - Nursing Assistant', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#EA2430'},
  {name:'CLC - Nursing Dept', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#EA2430'},
  {name:'Comfort Health', address:'2746 Superior Dr NW # 200', city:'Rochester', state:'MN', zip:'55901', phone:'(507) 281-2332', color:'#EA2430'},
  {name:'Cuyuna Regional Medical Center', address:'320 E Main St', city:'Crosby', state:'MN', zip:'56441', phone:'(218) 546-7000', color:'#EA2430'},
  {name:'Essentia Health', address:'13060 Isle Dr.', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 828-2880', color:'#EA2430'},
  {name:'Good Samaritan Communities', address:'804 Wright St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-1407', color:'#EA2430'},
  {name:'Lakewood Health System', address:'49725 County 83', city:'Staples', state:'MN', zip:'56479', phone:'800-525-1033', color:'#EA2430'},
  {name:'Minneapolis Hearth Institute', address:'800 E 28th St', city:'Minneapolis', state:'MN', zip:'55407', phone:'(612) 863-3900', color:'#EA2430'},
  {name:'Lakewood Health System', address:'49725 County 83', city:'Staples', state:'MN', zip:'56479', phone:'800-525-1033', color:'#EA2430'},
  {name:'Lakewood Health System', address:'49725 County 83', city:'Staples', state:'MN', zip:'56479', phone:'800-525-1033', color:'#EA2430'},
  {name:'Lakewood Health System', address:'49725 County 83', city:'Staples', state:'MN', zip:'56479', phone:'800-525-1033', color:'#EA2430'},
  {name:'MSTATE - Medical Office Careers', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#EA2430'},
  {name:'MSTATE - Nursing', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#EA2430'},
  {name:'MSTATE - Surgical Technology', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#EA2430'},
  {name:'MSTATE - Pharmacy Tech', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#EA2430'},
  {name:'MSTATE - Massage Therapy', address:'405 Colfax Ave SW', city:'Wadena', state:'MN', zip:'56482', phone:'(877) 450-3322', color:'#EA2430'},
  {name:'Recovery Health', address:'5900 Green Oak Dr #200', city:'Minnetonka', state:'MN', zip:'55343', phone:'(952) 926-9808', color:'#EA2430'},
  {name:'Spectrum Homecare', address:'Crossman Ln', city:'Inver Grove Heights', state:'MN', zip:'55076', phone:'(651) 451-0569', color:'#EA2430'},
]

const businessGreen = [
  {name:'CHS', address:'5500 Cenex Drive', city:'Inver Grove Heights', state:'MN', zip:'55077', phone:'(800) 328-6539', color:'#57B74F'},
  {name:'CLC - Agriculture', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#57B74F'},
  {name:'CLC - Animal Science', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#57B74F'},
  {name:'CLC - Horticulture', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#57B74F'},
  {name:'CLC - Natural Resources', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#57B74F'},
  {name:'Crane Meadows National Wildlife', address:'19502 Iris Rd', city:'Royalton', state:'MN', zip:'56373', phone:'(320) 632-1575', color:'#57B74F'},
  {name:'Department of Natural Resources - Parks', address:'1601 Minnesota Dr.', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 203-4300', color:'#57B74F'},
  {name:'Department of Natural Resources - Wildlife', address:'1601 Minnesota Dr.', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 203-4302', color:'#57B74F'},
  {name:'Department of Natural Resources - Forestry', address:'1601 Minnesota Dr.', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 203-4300', color:'#57B74F'},
  {name:'Midwest Machinery', address:'7045 Foley Rd', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 829-5356', color:'#57B74F'},
  {name:'Natural Resource Conservation Services', address:'7118 Clearwater Rd N', city:'Baxter', state:'MN', zip:'56425', phone:'(218) 829-5965', color:'#57B74F'},
  {name:'Land O\'Lakes', address:'4001 Lexington Ave N', city:'Arden Hills', state:'MN', zip:'55126', phone:'(651) 481-2222', color:'#57B74F'},
  {name:'Christenson Farms', address:'23971 Co Rd 10', city:'Sleepy Eye', state:'MN', zip:'56085', phone:'(507) 794-5310', color:'#57B74F'},
  {name:'Gold \'n Plump Poultry Co.', address:'4150 2nd St S # 200', city:'St. Cloud', state:'MN', zip:'56302', phone:'(800) 328-2838', color:'#57B74F'},
  {name:'Jennie-O Turkey Store', address:'930 122nd St SW', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-1161', color:'#57B74F'},
  {name:'CentraSota Coop', address:'805 Hwy 55 East', city:'Buffalo', state:'MN', zip:'55313', phone:'(763) 682-1464', color:'#57B74F'},
  {name:'Mounted Eagles', address:'8386 50th Avenue', city:'Brainerd', state:'MN', zip:'56401', phone:'(888) 828-9920', color:'#57B74F'},

]

const businessBlue = [
  {name:'Brainerd Fire Department', address:' 23 Laurel St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-2312', color:'#6DCCEF'},
  {name:'Brainerd Police Department', address:' 225 E River Rd', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-2805', color:'#6DCCEF'},
  {name:'CLC - Criminal Justice', address:'501 W College Dr', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 855-8000', color:'#6DCCEF'},
  {name:'Crow Wing County Corrections', address:'313 Laurel St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 822-7050', color:'#6DCCEF'},
  {name:'Crow Wing County Dispatchers', address:'304 Laurel St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-4749', color:'#6DCCEF'},
  {name:'Crow Wing County Sheriff\'s Dept.', address:'304 Laurel St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-4749', color:'#6DCCEF'},
  {name:'Mille Lacs Tribal DNR', address:'43408 Oodena Drive', city:'Brainerd', state:'MN', zip:'56359', phone:'(320) 532-4181', color:'#6DCCEF'},
  {name:'Mille Lacs Tribal Police', address:'43408 Oodena Drive', city:'Brainerd', state:'MN', zip:'56359', phone:'(320) 532-4181', color:'#6DCCEF'},
  {name:'North Memorial Ambulance', address:'210 NW 5th St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 829-8767', color:'#6DCCEF'},
  {name:'U.S. National Guard', address:'1115 Wright St', city:'Brainerd', state:'MN', zip:'56401', phone:'(218) 828-2278', color:'#6DCCEF'},

]

export default class BusinessesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      businessPurple: businessPurple,
      businessYellow: businessYellow,
      businessOrange: businessOrange,
      businessBlack: businessBlack,
      businessRed: businessRed,
      businessGreen: businessGreen,
      businessBlue: businessBlue,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // if (condition) {
    //
    // }
    this.setState({
      visible: !this.state.visible
    });
  }


  render() {
    return(
      <ScrollView style={{backgroundColor:'#88B467'}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, margin:40}}>Did you find a business you liked? Check out more info here!</Text>
        <View style={{flex:1, margin:20, marginTop:10 ,justifyContent:'center'}}>
        <View>
          <TouchableOpacity onPress={this.toggle}>
            <Text
              style={{
              backgroundColor:'#CB3795',
              marginLeft:20,
              marginRight:20,
              marginTop:5,
              padding: 20,
              textAlign:'center',
              fontSize:18,
              borderColor:'#43781c',
              borderWidth:1,
              shadowColor: '#43781c',
              shadowRadius:1,
              shadowOpacity:1,
              shadowOffset: {
                width: 1,
                height: 1,
              },}}>
              Computer and IT
            </Text>
          </TouchableOpacity>
          <HideableView
            removeWhenHidden={true}
            visible={this.state.visible}>
              {this.state.businessPurple.map((business, index) =>{
                return (<View key={index}><Text style={styles.businessPurple} key={index}>{business.name}</Text></View>)
              })}
          </HideableView>
        </View>
          <TouchableOpacity onPress={this.toggle}>
              <Text style={{backgroundColor:'#EA2430',
                marginLeft:20,
                marginRight:20,
                marginTop:10,
                padding: 20,
                textAlign:'center',
                fontSize:18,
                borderColor:'#43781c',
                borderWidth:1,
                shadowColor: '#43781c',
                shadowRadius:1,
                shadowOpacity:1,
                shadowOffset: {
                  width: 1,
                  height: 1,
                },}}>
                Health Services
              </Text>
          </TouchableOpacity>
          <HideableView
            removeWhenHidden={true}
            visible={this.state.visible}>
            {this.state.businessRed.map((business, index) =>{
              return (<View key={index}><Text style={styles.businessRed} key={index}>{business.name}</Text></View>)
            })}
          </HideableView>

          <TouchableOpacity onPress={this.toggle}>
            <Text style={{backgroundColor:'#F2EB39',
                marginLeft:20,
                marginRight:20,
                marginTop:10,
                padding: 20,
                textAlign:'center',
                fontSize:18,
                borderColor:'#43781c',
                borderWidth:1,
                shadowColor: '#43781c',
                shadowRadius:1,
                shadowOpacity:1,
                shadowOffset: {
                  width: 1,
                  height: 1,
                },}}>
                Business, Finance and Hospitality
            </Text>
          </TouchableOpacity>
          <HideableView
              removeWhenHidden={true}
              visible={this.state.visible}>
            {this.state.businessYellow.map((business, index) =>{
              return (<View key={index}><Text style={styles.businessYellow} key={index}>{business.name}</Text></View>)
            })}
          </HideableView>

          <TouchableOpacity onPress={this.toggle}>
              <Text style={{
                backgroundColor:'#F79835',
                marginLeft:20,
                marginRight:20,
                marginTop:10,
                padding: 20,
                textAlign:'center',
                fontSize:18,
                borderColor:'#43781c',
                borderWidth:1,
                shadowColor: '#43781c',
                shadowRadius:1,
                shadowOpacity:1,
                shadowOffset: {
                  width: 1,
                  height: 1,
                },}}>
                Engineering, Const., Manuf., Automotive/Heavy Equipment
              </Text>
          </TouchableOpacity>
          <HideableView
              removeWhenHidden={true}
              visible={this.state.visible}>
            {this.state.businessOrange.map((business, index) =>{
              return (<View key={index}><Text style={styles.businessOrange} key={index}>{business.name}</Text></View>)
            })}
          </HideableView>

          <TouchableOpacity onPress={this.toggle}>
              <Text style={{
                backgroundColor:'#57B74F',
                marginLeft:20,
                marginRight:20,
                marginTop:10,
                padding: 20,
                textAlign:'center',
                fontSize:18,
                borderColor:'#43781c',
                borderWidth:1,
                shadowColor: '#43781c',
                shadowRadius:1,
                shadowOpacity:1,
                shadowOffset: {
                  width: 1,
                  height: 1,
                },}}>
                Ag. Food and Natural Resources
              </Text>
          </TouchableOpacity>
          <HideableView
              removeWhenHidden={true}
              visible={this.state.visible}>
            {this.state.businessGreen.map((business, index) =>{
              return (<View key={index}><Text style={styles.businessGreen} key={index}>{business.name}</Text></View>)
            })}
          </HideableView>

          <TouchableOpacity onPress={this.toggle}>
              <Text style={{
                backgroundColor:'#6DCCEF',
                marginLeft:20,
                marginRight:20,
                marginTop:10,
                padding: 20,
                textAlign:'center',
                fontSize:20,
                borderColor:'#43781c',
                borderWidth:1,
                shadowColor: '#43781c',
                shadowRadius:1,
                shadowOpacity:1,
                shadowOffset: {
                  width: 1,
                  height: 1,
                },}}>
                Public Safety
              </Text>
          </TouchableOpacity>
          <HideableView
              removeWhenHidden={true}
              visible={this.state.visible}>
            {this.state.businessBlue.map((business, index) =>{
              return (<View key={index}><Text style={styles.businessBlue} key={index}>{business.name}</Text></View>)
            })}
          </HideableView>
          <View>
            <TouchableOpacity onPress={this.toggle}>
                <Text
                  style={{
                  backgroundColor:'#231F20',
                  color:'white',
                  marginLeft:20,
                  marginRight:20,
                  marginTop:10,
                  padding: 20,
                  textAlign:'center',
                  fontSize:20,
                  borderColor:'#43781c',
                  borderWidth:1,
                  shadowColor: '#43781c',
                  shadowRadius:1,
                  shadowOpacity:1,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },}}>
                  Liberal Arts
                </Text>
            </TouchableOpacity>
            <HideableView
                removeWhenHidden={true}
                visible={this.state.visible}>
              {this.state.businessBlack.map((business, index) =>{
                return (<View key={index}><Text style={styles.businessBlack} key={index}>{business.name}</Text></View>)
              })}
            </HideableView>
          </View>
        </View>
          <View style={{ marginBottom:130,}}>
          </View>
        </ScrollView>
    )
  }
 }
