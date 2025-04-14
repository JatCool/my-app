// src/App.tsx
import React from 'react';
import Timeline from './Timeline';
import './Timeline.css';

const moments = [
  {
    title: 'Перший день спілкування',
    date: '2024-03-18',
    description: 'Тоді я і не думав, що щось буде далі. Хто б міг подумати, що тепер ми одружуємось, тоді б я в це не повіри',
    image: 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744541544/Screenshot_From_2025-04-12_14-59-07_lvvcyr.png',
  },
  {
    title: 'Перша прогулянка',
    date: '2024-03-20',
    description: 'Я тоді трохи нервував, бо розговорна українська ще була слабка в мене. Ще я в той день в переписці боявся багато писати, щоб при особистій зустрічі були теми. Я навіть в голові вже продумував імовірні діалоги😅',
    image: 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744541959/Pasted_image_dwlets.png'
  },
  {
    title: 'Перший кружок',
    date: '2024-03-22',
    description: 'Це був твій перший кружок записаний для мене. Тоді було якось приємно від тебе це отримати. Та і зараз мені дуже подобається, коли ти мені записуєш кружочки в тг',
    video: 'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744542262/video_zdczcy.mp4'
  },
  {
    title: 'Красуня в моєму житті',
    date: '2024-03-24',
    description: 'Яка ж ти красива, коли щось записуєш і розповідаєш',
    video: 'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744542512/video_fi89br.mp4'
  },
  {
    title: 'Похід в кіно',
    date: '2024-03-29',
    description: 'Ми тоді пішли в кіно з тобою. Пам`ятаю як дивився під час сеансу періодично на тебе. Тобі дуже личать окуляри. Після того пішли в парк і спробували бабл ті. Вадим тоді образився на мене, що я вперше спробував його не з ним, але напій був так собі. Зараз я розумію, що тоді треба було робити більше фоток',
    image: 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744542896/Pasted_image_2_odg62s.png',
    audio: 'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744641243/%D0%9A%D0%BE%D0%BB%D1%8C%D0%BE%D1%80%D0%BE%D0%B2%D0%B0_fe8czc.mp3'
  },
  {
    title: 'Настя на дні народженні',
    date: '2024-03-30',
    description: 'Яка ж ти тут краисва. А ще це тоді, коли я почав розуміти, що хочеться з тобою частіше бачитись!',
    video: 'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744543143/video_qy27q7.mp4'
  },
  {
    title: 'Переписка',
    date: '2024-04-1',
    description: 'Просто залишу це тут)',
    image: 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744543450/Screenshot_From_2025-04-13_14-23-57_u1t3av.png'
  },
  {
    title: 'Ми почали зустрічатись',
    date: '2024-04-16',
    description: 'Зараз це виглядає трохи смішно, як я різко це сказав, але я просто в той момент не міг дочекатися вже нашої зустрічі, щоб сказти вживу',
    image: 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744544472/Screenshot_From_2025-04-13_14-40-34_wftegp.png'
  },
  {
    title: 'Прекрасні моменти',
    date: '2024-04-28',
    description: 'Ми почали робити фотки разом. Це був класний період(як всі з тобою. Я дуже радий, що зустрів тебе). Він тоді відчувався, як пісня на фоні',
    image: 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744544664/photo_2025-04-13_14-44-05_vjhr1z.jpg',
    audio: 'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744544937/Piano_Cover_vevgli.mp3'
  },
  {
    title: 'It takes two',
    date: '2024-05-03',
    description: 'Ми почали проходити її тоді. А завершили майже через рік. Сподіваюся проходження splitfiction настільки не розтягнемо. Ps: ти така мила в мене :)',
    video:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744545260/video_2025-04-13_14-53-44_gjtmjo.mp4'
  },
  {
    title: 'Прогулянка',
    date: '2024-05-03',
    description: 'А потім в той же день ми пішли гуляти з тобою. Це був неймовірний день, як і усі з тобою',
    image:'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744545396/photo_2025-04-13_14-56-25_x1dsha.jpg',
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744545512/Summertime_Sadness_c9rjir.mp3'
  },
  {
    title: 'Вистава',
    date: '2024-05-15',
    description: 'Ми з тобою пішли на виставу. Дуже класно було, я навіть трохи сплакнув наскільки сумна була історія. Дуже кохаю тебе! P.S: Пам`ятаю, що в той день якраз почали вимикати світло і ми шукали де можна купити пельмені)',
    video:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744545684/video_2025-04-13_15-01-16_edo3mk.mp4'
  },
  {
    title: 'Пікнік',
    date: '2024-05-27',
    description: 'Ти організувала нам пікнік. Хоч ти тоді була недовольна, але мені все тоді сподобалось. Дякую тобі за це!',
    image:'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744545892/photo_2025-04-13_15-04-43_kbkczm.jpg'
  },
  {
    title: 'На дні народженні Іллі',
    date: '2024-06-01',
    description: 'Це був класний день, стільки всього було. Тоді я зрозумів, що з кожним днем все сильніше і сильніше закохуюсь в тебе',
    image:'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744546137/photo_2025-04-13_15-08-28_ofau0c.jpg'
  },
  {
    title: 'Наша перша поїздка',
    date: '2024-06-13 по 2024-06-15',
    description: 'Ми вперше разом кудись поїхали. Тоді це був Кам`янець',
    images:['https://res.cloudinary.com/dwnxdiitr/image/upload/v1744547549/photo_2025-04-13_15-32-19_a4x5ll.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548551/photo_1_2025-04-13_15-48-47_baum5g.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548551/photo_2_2025-04-13_15-48-47_cr9sre.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548552/photo_3_2025-04-13_15-48-47_ainoif.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548553/photo_4_2025-04-13_15-48-47_inskri.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548554/photo_5_2025-04-13_15-48-47_pmcpzn.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548555/photo_6_2025-04-13_15-48-47_dajlsx.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548555/photo_7_2025-04-13_15-48-47_e2nnj1.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548556/photo_8_2025-04-13_15-48-47_l74tlj.jpg','https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548557/photo_9_2025-04-13_15-48-47_eyhir7.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548558/photo_10_2025-04-13_15-48-47_iqlmxs.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548558/photo_11_2025-04-13_15-48-47_xiyfyn.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548560/photo_12_2025-04-13_15-48-47_ltxzn0.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548560/photo_13_2025-04-13_15-48-47_uesejc.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548561/photo_14_2025-04-13_15-48-47_nfvjno.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744548562/photo_16_2025-04-13_15-48-47_kdety2.jpg'
    ],
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744549298/Somewhere_Only_We_Know_vsvuaj.mp3'
  },
  {
    title: 'Нічна прогулянка',
    date: '2024-07-05',
    description: 'Це була дуже класна нічна прогулянка в парку. Тоді ми просто дурачились, гойдались на качелях і раділи тому що знайшли один одного. Просто насолоджувались момент, бо розуміли, що скоро настанет складний етап, з котрим нам треба буде зустрітись',
    video:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744549486/video_2025-04-13_16-04-38_m33t5n.mp4'
  },
  {
    title: 'Переїзд в іншу країну...',
    date: '2024-07-14',
    description: 'Це був дуже складний етап. Мені досі дуже соромно, що тобі прийшлось пережити через мене. Я зробив стільки помилок, що навіть і не знаю чи достойний тебе і чого ти досі зі мною. Ти мала повне право просто послати мене, але ти залишилась зі мною до кінця. Мені дуже приємно і одночасно боляче через все це, будь ласка, пробач мене. Просто згадуючи все це мені хочеться плакати. Я просто дурень. Кохаю тебе',
    images:['https://res.cloudinary.com/dwnxdiitr/image/upload/v1744549995/photo_1_2025-04-13_16-12-54_ki7xy9.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744549996/photo_2_2025-04-13_16-12-54_bqquxo.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744549996/photo_3_2025-04-13_16-12-54_dqilgf.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744549998/photo_5_2025-04-13_16-12-54_eapkxc.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744549998/photo_4_2025-04-13_16-12-54_cyt4cw.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744549999/photo_6_2025-04-13_16-12-54_plvtds.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744550000/photo_7_2025-04-13_16-12-54_egk6lw.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744550001/photo_8_2025-04-13_16-12-54_en5tas.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744550002/photo_9_2025-04-13_16-12-54_rv6rpj.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744550003/photo_10_2025-04-13_16-12-54_erex2k.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744550004/photo_11_2025-04-13_16-12-54_zxejlr.jpg'
    ],
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744550392/Iris_peffq3.mp3'
  },
  {
    title: 'Оренда квартири',
    date: '2024-08-21',
    description: 'Ми нарешті змогли знайти квартиру в Салоніках. Звісно вона не ідеальна, але вона була наша і ми могли нарешті з`їхати. Тоді здавалось, що найгірше вже позаду, але ще були випробування через які нам треба було пройти',
    image:'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744550556/photo_2025-04-13_16-21-58_i8lxug.jpg'
  },
  {
    title: 'Перша пропозиція',
    date: '2024-08-26',
    description: 'Я зробив тобі пропозицію, тому що в той момент зрозумів, що не хочу тебе нікуди відпускати. Зрозумів, що хочу, щоб ти була моя. Так, зараз розумію, що вона була зроблена так собі і мені дуже соромно за це',
    image:'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551002/photo_2025-04-13_16-28-28_blcqlv.jpg'
  },
  {
    title: 'Похід на концерт',
    date: '2024-10-02',
    description: 'Ти тоді ще моталась між Грецією і Україною. Ми тоді дуже багато сварились, було дуже напружено і багато непорозумінь. Але ми знайшли час сходити кудись разом і відпочити з тобою. Дуже тебе кохаю!',
    images:['https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551238/photo_3_2025-04-13_16-33-16_uh65w7.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551239/photo_4_2025-04-13_16-33-16_qnbom9.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551240/photo_5_2025-04-13_16-33-16_pekz1k.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551241/photo_6_2025-04-13_16-33-16_hftw4p.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551242/photo_7_2025-04-13_16-33-16_umsbs1.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551243/photo_8_2025-04-13_16-33-16_ztmmbr.jpg', 
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744551245/photo_10_2025-04-13_16-33-16_wxcpai.jpg'
    ],
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744551637/Idea_1_xn7ywp.mp3'
  },
  {
    title: 'Побачення',
    date: '2024-11-27',
    description: 'Ти вже приїхала з України і поробила всі справи. Це напевно вже був той період, коли ми почали меньше сваритись. Найскладніше вже було позаду. Хоча ми і знали, що попереду нас ще будут чекати випробування, але ми знали, що з усім впораємося!',
    images:['https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567339/photo_2_2025-04-13_21-02-09_xetjic.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567339/photo_4_2025-04-13_21-02-09_heayv5.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567339/photo_3_2025-04-13_21-02-09_ga5wbg.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567339/photo_1_2025-04-13_21-02-09_lgi8vf.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567339/photo_6_2025-04-13_21-02-09_jc2dtn.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567340/photo_5_2025-04-13_21-02-09_awitsj.jpg'
    ],
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744567557/Beanie_t6pega.mp3'
  },
  {
    title: 'Новий рік',
    date: '2024-12-28 по 2025-01-03',
    description: 'Це був найкращий Новий рік(ну тому що він був з тобою!). Твоя сім`я така класна. Було дуже весело. Я був дуже радий, що мої родичі з твоїми познайомились і тобі було веселіше, що твої приїхали.',
    images:['https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567800/photo_1_2025-04-13_21-09-43_izkhwb.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567800/photo_2_2025-04-13_21-09-43_xs2i6k.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567800/photo_6_2025-04-13_21-09-43_jka1t5.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567800/photo_4_2025-04-13_21-09-43_t8fplo.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567800/photo_3_2025-04-13_21-09-43_gjvmqk.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567801/photo_7_2025-04-13_21-09-43_raaoqd.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567801/photo_5_2025-04-13_21-09-43_k1lfix.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567801/photo_8_2025-04-13_21-09-43_zhq2if.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567801/photo_9_2025-04-13_21-09-43_sjvac1.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567804/photo_11_2025-04-13_21-09-43_ogn02q.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567804/photo_12_2025-04-13_21-09-43_qlzgex.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567804/photo_13_2025-04-13_21-09-43_k0hl0n.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567804/photo_15_2025-04-13_21-09-43_vs0w9j.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567804/photo_14_2025-04-13_21-09-43_mkr2x0.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567805/photo_18_2025-04-13_21-09-43_oukajr.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567805/photo_19_2025-04-13_21-09-43_robf7l.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567805/photo_17_2025-04-13_21-09-43_gta73p.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567805/photo_16_2025-04-13_21-09-43_ouq0g5.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_20_2025-04-13_21-09-43_x57o2d.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_23_2025-04-13_21-09-43_k8jkfq.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_22_2025-04-13_21-09-43_sdrnfj.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_21_2025-04-13_21-09-43_yazeox.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_21_2025-04-13_21-09-43_yazeox.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_24_2025-04-13_21-09-43_keuhx9.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567808/photo_24_2025-04-13_21-09-43_keuhx9.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744567809/photo_25_2025-04-13_21-09-43_kn3zjk.jpg'
    ],
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744639435/From_The_Start_pczazy.mp3'
  },
  {
    title: 'Пропозиція номер 3',
    date: '2025-02-08',
    description: 'Я тоді зміг трохи відкласти коштів, щоб купити кольцо краще(і так, я його знайшов раніше за тебе). Я зараз розумію, що тоді було зроблено дуже багато помилок і мені соромно за це. Але я дуже радий, що ти сказала так!',
    video:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744639697/video_2025-04-14_17-07-20_fnkvu0.mp4'
  },
  {
    title: 'Далі буде',
    date: 'Сьогодення',
    description: 'Це був дуже класний рік! Я тебе дуже кохаю! Ми пройшли дуже багато всього, були і сварки, були і важкі моменти, ми робили один одному боляче, але ж і багато було моментів, коли ми сміялися і раділи життю разом. Ще буде багато подібних моментів, як важких так і не дуже, але можу сказати, що ми все пройдемо разом. Ми потім в старості будемо сидіти на кріслі біля каміну. Ти будеш щось щити, а я буду розповідати тобі анекдоти і будем разом з цього сміятися і згадувати через скільки всього ми з тобою пройшли. Я тебе дуже кохаю. Разом до кіцня! P.S: А на останок фотографії, котрі запали до душі :)',
    images: ['https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640324/photo_2025-04-14_17-17-59_hyjvav.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640428/photo_1_2025-04-14_17-20-17_ztqg3i.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_5_2025-04-14_17-20-17_igoghq.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_2_2025-04-14_17-20-17_spnjru.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_3_2025-04-14_17-20-17_bzdw2e.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_6_2025-04-14_17-20-17_idg2w1.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_4_2025-04-14_17-20-17_shwnxg.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_9_2025-04-14_17-20-17_iowauk.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_7_2025-04-14_17-20-17_qht0pb.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640429/photo_10_2025-04-14_17-20-17_rsauts.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640430/photo_11_2025-04-14_17-20-17_rqqkvr.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640432/photo_12_2025-04-14_17-20-17_jzgqhj.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640432/photo_13_2025-04-14_17-20-17_wo7jdt.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640432/photo_14_2025-04-14_17-20-17_f559er.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640433/photo_17_2025-04-14_17-20-17_dvzafk.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640433/photo_15_2025-04-14_17-20-17_zczt6q.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640433/photo_19_2025-04-14_17-20-17_ax2b06.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640433/photo_18_2025-04-14_17-20-17_bkpclf.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640435/photo_21_2025-04-14_17-20-17_kz72hg.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640435/photo_22_2025-04-14_17-20-17_f5xfsb.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640436/photo_25_2025-04-14_17-20-17_hp4clg.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640436/photo_23_2025-04-14_17-20-17_odwdvd.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640436/photo_28_2025-04-14_17-20-17_s0v1u7.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640436/photo_26_2025-04-14_17-20-17_xu2t5q.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640436/photo_27_2025-04-14_17-20-17_n7wybo.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640437/photo_29_2025-04-14_17-20-17_ky4qvg.jpg',
      'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640435/photo_20_2025-04-14_17-20-17_lgqdjg.jpg', 'https://res.cloudinary.com/dwnxdiitr/image/upload/v1744640438/photo_30_2025-04-14_17-20-17_ibxphy.jpg'
    ],
    audio:'https://res.cloudinary.com/dwnxdiitr/video/upload/v1744640789/Glimpse_of_Us_axoq0o.mp3'
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Timeline moments={moments} />
    </div>
  );
};

export default App;
