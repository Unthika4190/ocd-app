import React from "react";

export default function Blogpost2() {
  return (
    <div>
      <>
        {/* <title>Free Css Layout</title> */}
        <meta
          httpEquiv="content-type"
          content="text/html; charset=iso-8859-1"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <div id="container">
          <div id="header">
            <h1>
              <a href="http://www.free-css.com/free-css-layouts.php">
                Free CSS Layouts
              </a>
            </h1>
          </div>
          <div id="wrapper">
            <div>
              <strong>
                โพสต์เมื่อวันที่ 21 ธันวาคม 2567 โดยเบญญาภา วงค์วันดี
              </strong>
              <p className="lead">การวินิจฉัยระบบภายในองค์กรภาครัฐ </p>
              <p>
                <ul className="ml-4">ทฤษฎีระบบSystem Theory</ul>
              </p>

              <p className="ml-4">
                ทฤษฎีระบบ System Theory
                เป็นแนวคิดที่มององค์การเป็นระบบเปิดที่ซับซ้อน
                มีองค์ประกอบพื้นฐาน ดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  1. องค์การเป็นหน่วย (Entity) ที่ไม่แตกต่างจากระบบอื่น ซึ่งมี
                  <ul className="ml-4">
                    <li>Input คือวัตถุดิบ ความสามารถของพนักงานและเงินทุน</li>
                    <li>Transformation Process กระบวนการขององค์การ</li>
                    <li>
                      Output คือสินค้า ข้อมูล บริการ Stakeholders
                      ที่เกิดจากกระบวนการขององค์การ
                    </li>
                  </ul>
                  2. สภาพแวดล้อมและขอบเขตขององค์การ(Environment and Boundaries)
                  <ul className="ml-4">
                    <li>องค์การมีลักษณะเปิดหรือปิด</li>
                    <li>
                      ดำรงอยู่ในสิ่งแวดล้อม (ลูกค้า พันธมิตร คู่แข่ง
                      แนวโน้มต่างๆ) ที่เป็นประโยชน์หรือโทษต่อองค์การ
                    </li>
                    <li>เปลี่ยนแปลงช้าหรือเร็ว</li>
                    <li>
                      ระบบต่างๆ ล้วนอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม
                      และตรงกันข้ามก็ส่งผลกระทบต่อสิ่งแวดล้อมรอบข้าง
                    </li>
                  </ul>
                  3. ทุกส่วนเกี่ยวข้องกัน (All Parts Related)
                  <ul className="ml-4">
                    <li>ทุกส่วนของระบบมีความเกี่ยวข้องกัน</li>
                    <li>
                      ถ้าส่วนใดส่วนหนึ่งเปลี่ยนแปลง ส่วนอื่นจะเปลี่ยนแปลงตาม
                      คือได้รับผลกระทบ
                    </li>
                  </ul>
                  4. ข้อมูลป้อนกลับ (Feed-backs)
                  <ul className="ml-4">
                    <li>
                      องค์การได้รับข้อมูลป้อนกลับของ Outputs จากสิ่งแวดล้อม
                    </li>
                    <li>ข้อมูลปรากฏอยู่ในหลายรูปแบบ เช่น</li>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ผลการให้บริการจากหน่วยงานภาครัฐ ผลประกอบการ</li>
                      <li>ปฏิสัมพันธ์ที่เกิดกับองค์การอื่น</li>
                    </ul>
                  </ul>
                  5. ภายในระบบมีปฏิสัมพันธ์กัน (Systems Within Systems)
                  <ul className="ml-4">
                    <li>ระดับบุคคล</li>
                    <li>ระดับกลุ่ม</li>
                    <li>ระหว่างกลุ่ม</li>
                    <li>รระดับองค์การ</li>
                  </ul>
                </ul>
              </p>

              <p className="ml-4">
                ทฤษฎีระบบ สามารถสรุปได้ดังนี้
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li> องค์การเป็นระบบที่มีขอบเขต</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li> Inputs</li>
                    <ul className="ml-4" style={{ listStyleType: "square" }}>
                      วัตถุดิบ Suppliers เงินทุน/แหล่งทุน ความสามารถของพนักงาน
                      ผู้ถือหุ้น นโยบายของรัฐบาล และกฎระเบียบต่างๆ
                    </ul>
                    <li>
                      Throughputs/Transformation Process คือกระบวนการทำงาน
                      กระบวนการแปลง Inputs เป็น Outputs
                    </li>
                    <li> Outputs คือสิ้นค้า บริการ ข้อมูล ฯลฯ</li>
                  </ul>
                  <li>
                    องค์การและระบบย่อยทั้งหมดขององค์การทำหน้าที่ในลักษณะที่สอดประสานกัน
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>เพื่อให้บรรลุเป้าหมายขององค์การ</li>
                    <li>ทุกส่วนของระบบล้วนมีความเกี่ยวข้องกัน</li>
                    <li>
                      เมื่อส่วนใดส่วนหนึ่งถูกเปลี่ยนแปลง ส่วนอื่นๆ
                      ก็จะได้รับผลกระทบ
                    </li>
                  </ul>
                  <li>
                    กระบวนการภายในองค์การ จำเป็นต่อประสิทธิภาพและประสิทธิผล
                    รวมทั้งความสำเร็จขององค์การ
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>กระบวนการผลิต ซึ่งรวบรวมและแปลง Inputs เป็น Outputs</li>
                    <li>
                      กระบวนการสังคม เกี่ยวข้องกับบุคคลและกลุ่มต่างๆ
                      จนทำให้เกิดบรรทัดฐาน
                    </li>
                    <li>
                      และกระบวนการตอบสนองความต้องการของแต่ละบุคคล
                      ซึ่งมีอิทธิพลต่อความรู้สึกและความมุ่งมั่นของมนุษย์
                    </li>
                  </ul>
                  <li>องค์การและระบบย่อยทั้งหมดขององค์การ</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>เป็นหน่วยหนึ่งอยู่ภายใต้อิทธิพลของสิ่งแวดล้อม</li>
                    <li>ที่สามารถส่งผลกระทบทั้งด้านบวกและลบต่อหน่วยนั้นๆ</li>
                  </ul>
                  <li>
                    องค์การได้รับข้อมูลป้อนกลับ (Feedback) เกี่ยวกับ Outputs
                    ของตนจากสิ่งแวดล้อม
                  </li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      ซึ่งช่วยให้องค์การสามารถดำเนินการเปลี่ยนแปลงต่างๆ
                      เพื่อให้การตอบสนองต่อสิ่งแวดล้อมดีขึ้น
                    </li>
                    <li>
                      โดยข้อมูลป้อนกลับจากลูกค้าเป็นสิ่งที่จำเป็นต่อความสำเร็จในระยะยาวขององค์การมากที่สุด
                    </li>
                  </ul>
                </ul>
              </p>

              <p className="ml-4">
                การวินิจฉัยระบบด้วย Weisbord’s Six-Box Model
                <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li> ความมุ่งหมาย (Purpose) หรือพันธกิจ (Mission)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>มีความชัดเจน</li>
                    <li>ได้รับการยอมรับจากพนักงานหรือไม่</li>
                  </ul>
                  <li> โครงสร้าง (Structure)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>กิจกรรม/งานต่างๆ ถูกแบ่งในลักษณะใด</li>
                    <li>
                      ช่วยตอบสนองต่อความมุ่งหมาย/พันธกิจอย่างมีประสิทธิภาพหรือไม่
                    </li>
                  </ul>
                  <li> ความสัมพันธ์ (Relationships)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>การประสานงานระหว่างหน่วยงานเป็นไปด้วยดีหรือไม่</li>
                    <li>หรือก่อให้เกิดความขัดแย้งอย่างไร</li>
                    <li>และจัดการกับความขัดแย้งนั้นอย่างไร</li>
                  </ul>
                  <li>รางวัล (Rewards)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>มีการให้รางวัลสำหรับผลงานที่ต้องการหรือไม่</li>
                    <li>หรือมีมาตรการลงโทษอย่างไร</li>
                  </ul>

                  <li> การนำ (Leadership)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>นำการขับเคลื่อนองค์การ</li>
                    <li>
                      มีหน้าที่กำกับติดตามความเป็นไป
                      หรือความสำเร็จขององค์ประกอบทั้ง 5 ด้าน
                    </li>
                  </ul>
                  <li>กลไกที่จำเป็น (Helpful Mechanism)</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>องค์การมีเครื่องมือ</li>
                    <li>
                      หรือเทคโนโลยีสำหรับการประสานงานระหว่างหน่วยงานต่างๆ
                      อย่างเพียงพอหรือไม่
                    </li>
                  </ul>
                </ul>
                <ul className="ml-4">
                  <li>ข้อดี ข้อเสียของ Model</li>
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>ข้อดี</li>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>Model ที่เข้าใจง่าย</li>
                    </ul>
                    <li>ข้อเสีย</li>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>เป็นการวินิจฉัยระบบที่ขาดความรอบด้าน</li>
                      <li>
                        เนื่องจากไม่ได้แสดงความเกี่ยวพันของแต่ละองค์ประกอบอย่างชัดเจ
                      </li>
                      <li>รวมทั้งไม่ได้คำนึงถึงอิทธิพลของสิ่งแวดล้อม</li>
                    </ul>
                  </ul>
                </ul>
              </p>
              <p>
                Sapibulumnibh phasellus nulla egestibulum enim pretium elit
                tincidunt estiquam ultrisque donectetur. Sedcondimentumsan odio
                hendrerit proin vitae dignis nibh ac justo id congue.
                Amesintesque vel curabitae volutpat donec alique
                nasceleifendimentesque montesque rhoncus quis eros. Vestnunc
                nonummy
              </p>
              <p>
                Montegeraliquam sed pede in cursus praesenec vestas rhoncus wisi
                at wisi. Condisseloborttis enim et ipsum mauristie id felit
                adipiscipit ac auctortorttitor sempor. Vitantesqueat sempus non
                sed et mus sit vivamus purus netus hendiment. Pretiuma diam et
                id tempus dolor por wisi sed volutpat facilisi.
              </p>
              <p>
                Wisiet sus adipit phasellentum elit condissim consecteturpiscing
                sapien vivamus et congue. Utvel tris quismod cursus liberos elit
                nisse curabitur tur parturpis tellenterdum. Semperligula
                curabitae tellentesque nulla trices vestas ristibulum id justo
                auctor facinia. Natisdonec consequat nibh pellus.
              </p>
              <p>
                Vestibusodio euisque id elerisus lacus tincidunt sit malesuada
                lacus pellus parturpiscing. Pellenterdumat maecenatoque cras a
                magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
                eget temper lacus vestibus velit lacus venean. Magnaipsum tellus
                morbi leo aliquat nulla convallis pellentesque.
              </p>
            </div>
          </div>
          {/* <div id="navigation">
      <p>
        <strong>Navigation Here</strong>
      </p>
      <ul>
        <li>
          <a href="http://www.free-css.com/">Free CSS Templates</a>
        </li>
        <li>
          <a href="http://www.free-css.com/free-css-layouts.php">
            Free CSS Layouts
          </a>
        </li>
      </ul>
    </div> */}
          {/* <div id="extra">
      <p>
        <strong>More stuff here.</strong>
      </p>
      <p>
        sit malesuada lacus pellus parturpiscing. Pellenterdumat maecenatoque
        cras a magna nibh et quis diam ames et. Laoremvolutpat ac dolor eget
        eget temper lacus vestibus velit lacus venean. Magnaipsum tellus morbi
        leo aliquat nulla convallis pellentesque.
      </p>
    </div> */}
          <div id="footer">{/* <p>Footer</p> */}</div>
        </div>
      </>
    </div>
  );
}
