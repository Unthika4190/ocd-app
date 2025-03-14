import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสต์เมื่อวันที่ 18 ธันวาคม /2567 โดยเบญญาภา วงค์วันดี</p>
              <hr />
              {/* Post Content */}
              <p className="lead">
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่
                <ol className="ml-4" style={{ listStyleType: "lower-alpha" }}>
                  <li>
                    การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI)
                  </li>
                  <li>มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li>มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ol>
              </p>

              <p className="lead">
                OD มีรากฐานมาจาก
                <ol className="ml-4" style={{ listStyleType: "lower-roman" }}>
                  ODได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย
                  <li>จิตวิทยาสังคม (Social Psychology)</li>
                  <li>กระบวนการกลุ่ม (Group Dynamics)</li>
                  <li>
                    จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                    Psychology)
                  </li>
                  <li>
                    ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management
                    Theory)
                  </li>
                  <li>พฤติกรรมองค์การ (Organization Behavior)</li>
                  <li>สังคมวิทยา (Sociology)</li>
                  <li>จิตบำบัด (Psychotherapy)</li>
                </ol>
              </p>

              <p className="lead">
                ธรรมชาติของ OD คืออะไร
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  ธรรมชาติของ OD (The Nature of OD)
                  <li>
                    OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                    เป็นแกนกลางหรือแกนหลัก
                  </li>
                  <li>เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                  <li>
                    ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก กลุ่ม
                    บุคคล ชุมชน ประเทศ ภูมิภาค
                  </li>
                  <li>OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม</li>
                  <li>OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                  <li>OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ</li>
                  <li>OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                  <li>
                    OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                  </li>
                  <ol className="ml-4" style={{ listStyleType: "square" }}>
                    <li>ค่านิยม (Values)</li>
                    <li>ทัศนคติ (Attitudes)</li>
                    <li>บรรทัดฐาน (Norms)</li>
                    <li>วิธีการบริหารจัดการ (Management Practices)</li>
                  </ol>
                  <li>ODผู้มีบทบาทสำคัญในการทำ</li>
                  <ol className="ml-4" style={{ listStyleType: "disc" }}>
                    <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                    <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                    <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                    <li>อาจารย์ (Teacher)</li>
                    <li>ผู้ฝึกสอน (Coach)</li>
                  </ol>
                  <li>
                    OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้ (Planned
                    Follow-up)
                  </li>
                  <li>
                    OD เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ
                    หรือโครงสร้างขององค์การ
                  </li>
                </ol>
              </p>

              <p className="lead">
                ลักษณะสำคัญของOD
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ODเกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์
                    <ol className="ml">
                      <li>โครงสร้าง</li>
                      <li>กระบวนการของระบบทั้งระบบ</li>
                      <li>มีความหมายครอบคลุมตั้งแต่องค์การ ฝ่ายหรือกลุ่มงาน</li>
                    </ol>
                    <li>
                      OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                      Behavioral Science ให้กับสมาชิกขององค์การ เช่น
                    </li>
                    <ol className="ml-4">
                      <li>ภาวะผู้นำ</li>
                      <li>กระบวนการกลุ่ม</li>
                      <li>การออกแบบงาน</li>
                      <li>กลยุทธ์</li>
                      <li>รูปแบบองค์การ</li>
                      <li>ความสัมพันธ์ระหว่างประเทศ</li>
                    </ol>
                    <li>
                      OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้
                    </li>
                    <li>
                      OD
                      เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
                    </li>
                    <li>OD มุ่งปรับปรุงประสิทธิผลขององค์การ</li>
                  </li>
                </ol>
              </p>

              <p className="lead">
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    ความเข้าใจในระบบสังคม (Understanding social systems)
                    คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
                    เช่น
                  </li>
                  <ol className="ml-4">
                    <li>จิตวิทยา</li>
                    <li>จิตวิทยาสังคม</li>
                    <li>สังคมวิทยา</li>
                    <li>รัฐศาสตร์</li>
                    <li>เศรษฐศาสตร์</li>
                    <li>ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น</li>
                  </ol>
                  <li>เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง</li>
                  <li>
                    เข้าใจบทบาทบุคคลที่สาม (Third Party)
                    ของที่ปรึกษาด้านการเปลี่ยนแปลง
                  </li>
                  <li>
                    บุคคลที่ไม่มีส่วนได้ส่วนเสีย
                    เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ
                  </li>
                </ol>
              </p>

              <p className="lead">
                ค่านิยมของ OD (OD Values)
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  ค่านิยมของ OD
                  <li>
                    การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                    Dignity)
                  </li>
                  <li>การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented)</li>
                  <li>ความเท่าเทียม (Democracy)</li>
                  <li> ความสุจริต (Honesty)</li>
                  <li> การกระจายอำนาจ (Empowerment)</li>
                  <li>ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)</li>
                  <li>มีจิตช่วยเหลือ (Being Helpful)</li>
                </ol>
              </p>

              <p className="lead">
                สรุปค่านิยมของ OD ที่สำคัญ ได้แก่
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion)
                  </li>
                  <li> การให้ความร่วมมือ (Collaboration)</li>
                  <li> ความจริงใจ (Authenticity)</li>
                  <li> ความเข้าใจในตนเอง (Self-awareness)</li>
                  <li> การกระจายอำนาจ (Empowerment)</li>
                  <li>
                    ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                    Justice)
                  </li>
                  การพัฒนาและเปลี่ยนแปลงจะต้องนำไปสู่ความเท่าเทียมและความยุติธรรม{" "}
                </ol>
              </p>

              <p className="lead">
                ข้อแตกต่างระหว่าง OD กับ Change Management (CM)
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    OD
                    ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก
                  </li>
                  CM
                  ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                  <li>
                    OD มุ่งไปที่พลวัตของระบบในองค์การ
                    ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                    สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น
                  </li>
                  CM มุ่งไปที่ผลลัพธ์มากกว่า
                  <li>
                    OD
                    ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                  </li>
                  CM
                  เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ
                  <li>
                    OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                    การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                    เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ ทางสังคม
                  </li>
                  CM
                  จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ
                </ol>
              </p>
              <p className="lead">
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM)
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>OD</li>
                  <ol className="ml-4" style={{ listStyleType: "square" }}>
                    <li>การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร</li>
                    <li>
                      การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ OD
                    </li>
                    ส่วน CM
                    <li>การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ</li>
                    <li>เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD</li>
                  </ol>
                  <li>OD</li>
                  <ol className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                      กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน
                    </li>
                    <li>
                      ถ่ายทอดความรู้
                      และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                    </li>
                    ส่วน CM
                    <li>มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน</li>
                    <li>ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
                  </ol>
                </ol>
              </p>

              <p className="lead">
                พัฒนาการของ OD (The Revolution of OD)
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>
                    มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                    Background หรือ T-group)
                  </li>
                  <li> มาจากรากฐาน Action Research และ Survey Feedback</li>
                  <li> มาจากรากฐาน Normative Background</li>
                  <ol className="ml-4" style={{ listStyleType: "" }}>
                    <li>
                      1) แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว
                      (One Best Way) ในการบริหารองค์การ
                    </li>
                    <li>2) รูปแบบการจัดการแบบมีส่วนร่วม</li>
                    <li>3) หลักการของตาข่าย (เครือข่าย)</li>
                  </ol>
                  <li>
                    มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity และ
                    Quality-of-Work-Life)
                  </li>
                  <ol className="ml-4" style={{ listStyleType: "" }}>
                    <li>
                      1)
                      มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                    </li>
                    <li>2) เน้นการมีส่วนร่วมของพนักงาน</li>
                    <li>
                      3) การจัดการทั่วทั้งองค์การ (Total Quality Management)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "" }}>
                      <li>Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย</li>
                      <li>
                        Quality = คุณภาพการให้บริการ ความพึงพอใจของผู้รับบริการ
                      </li>
                      <li>Management = การบริหารองค์การ</li>
                    </ol>
                    <li>4) คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li>
                  </ol>
                  <li> มาจากรากฐาน Strategic Change</li>
                </ol>
              </p>

              <p className="lead">
                รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change)
                <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                  <li>รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin’s Change Model)</li>
                  <ol className="ml-4">
                    <li>1) Unfreezing: การเตรียมพร้อมกับการเปลี่ยนแปลง</li>
                    <ol className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        การเตรียมพร้อมกับการเปลี่ยนแปลงกระบวนการนำเสนอข้อมูลความแตกต่างระหว่างพฤติกรรมที่ต้องการให้สมาชิกขององค์การแสดงออกกับพฤติกรรมปรากฏในปัจจุบัน
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>
                          เพื่อจูงใจให้สมาชิกเข้าร่วมกิจกรรมการเปลี่ยนแปลง
                        </li>
                        <li>การสร้างแรงจูงใจหรือความพร้อมในการเปลี่ยนแปลง</li>
                        <li>
                          การทำให้ความไม่พึงพอใจต่อสถานะปัจจุบันปรากฏขึ้นชัดเจน
                        </li>
                        <li>การค้นหาทางเลือกที่ดีกว่าหรือน่าพึงพอใจมากกว่า</li>
                        <li>กระบวนการพัฒนาองค์การ</li>
                        <li>
                          การทำให้องค์การมีความพร้อมสำหรับการเปลี่ยนแปลงไปสู่สถานะใหม่ที่ดีขึ้น
                        </li>
                      </ol>
                    </ol>

                    <ol className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        ทำให้สมาชิกในองค์การตระหนักว่าองค์การมีความจำเป็นต้องเปลี่ยนแปลง
                        มิฉะนั้น จะไม่สามารถสร้างผลลัพธ์ที่ดีขึ้น เช่น
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>ไม่สามารถมีผลประกอบการทางการเงินที่ดีขึ้น </li>
                        <li>
                          ไม่สามารถยกระดับคุณภาพชีวิตในการทำงานของพนักงาน{" "}
                        </li>
                        <li>ไม่สามารถดำเนินกิจการต่อไปได้ </li>
                        <li>
                          Disruptive Technology
                          เกิดการทำลายเพื่อให้เกิดสิ่งใหม่ที่ดีขึ้นหรือดีกว่าเดิม{" "}
                        </li>
                      </ol>
                    </ol>

                    <li>2) Moving/ Change: การดำเนินการเปลี่ยนแปลง</li>
                    <ol className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        การดำเนินการเปลี่ยนแปลงการยกระดับพฤติกรรมขององค์การ
                        ฝ่ายหรือบุคคลไปสู่ระดับใหม่{" "}
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>
                          การแทรกแซงระบบด้วยการเปลี่ยนโครงสร้างและกระบวนการขององค์การ
                          เพื่อหล่อหลอมพฤติกรรมและค่านิยมและทัศนคติใหม่{" "}
                        </li>
                        <li>
                          ยึดมั่นในพฤติกรรมใหม่
                          เพื่อให้สถานะในอนาคตตามที่ต้องการเกิดขึ้น
                        </li>
                        <li>
                          รับรู้ถึงความจำเป็นของการเปลี่ยนแปลง
                          ต้องทำให้ก้าวสู่สถานะใหม่ที่ดีกว่าเดิม{" "}
                        </li>
                      </ol>
                    </ol>

                    <ol className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        การจัดกิจกรรมพัฒนาองค์การที่สามารถเปลี่ยนแปลงองค์การให้ก้าวสู่สถานะใหม่ตามที่ต้องการ
                        เช่น
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>การเปลี่ยนแปลงโครงสร้างองค์การ</li>
                        <li>การเปลี่ยนแปลงค่านิยมขององค์การ</li>
                        <li>การพัฒนาศักยภาพของพนักงาน</li>
                        <li>การเปลี่ยนแปลงระบบให้รางวัลขององค์การ</li>
                      </ol>
                    </ol>

                    <li>3) Refreezing: การรักษาผลของการเปลี่ยนแปลง</li>
                    <ol className="ml-4" style={{ listStyleType: "square" }}>
                      <li>
                        Refreezing:
                        การรักษาผลของการเปลี่ยนแปลงเป็นขั้นตอนที่ทำให้สมาชิกในองค์การแสดงพฤติกรรมใหม่ที่สอดคล้องกับการเปลี่ยนแปลงองค์การด้วยกิจกรรมพัฒนาองค์การในขั้นตอน
                        Moving/Change และไม่หวนกลับไปแสดงพฤติกรรมเดิมอีก
                      </li>
                      <li>
                        Refreezing
                        เป็นขั้นตอนที่ทำให้องค์การดำรงอยู่ในสถานะใหม่ที่มีความสมดุล
                        โดยกระทำผ่านกลไกสนับสนุน ที่ส่งเสริมสถานะใหม่ขององค์การ
                        ด้าน
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>วัฒนธรรม</li>
                        <li>บรรทัดฐาน</li>
                        <li>นโยบาย</li>
                        <li>โครงสร้างองค์การ</li>
                      </ol>
                      <li>
                        Refreezing
                        คือกระบวนการที่จะทำให้สถานะใหม่ตามที่ต้องการดำรงอยู่อย่างมั่นคง
                        ยั่งยืน ระยะยาว
                        และรักษาผลของการเปลี่ยนแปลงให้ดำรงอยู่ตลอดไป
                      </li>
                    </ol>
                  </ol>

                  <li>รูปแบบ Action Research (Action Research Model)</li>
                  <ol className="ml-4">
                    <li>Action Research (การวิจัยเชิงปฏิบัติการ)</li>
                    <li>
                      เป็นกระบวนการที่ดำเนินต่อเนื่องจากขั้นตอนแรกไปจนถึงขั้นตอนสุดท้าย
                      )
                    </li>
                    <li>
                      แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                    </li>
                    <li>Action Research มี 8 ขั้นตอน ดังนี้</li>
                    <ol className="ml-4" style={{ listStyleType: "" }}>
                      <li>1) การรับรู้ปัญหา (Problem Identification)</li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>
                          เป็นขั้นตอนที่ผู้บริหาร
                          หรือผู้มีอำนาจและบทบาทสำคัญในองค์การตระหนักว่าองค์การมีปัญหา
                        </li>
                        <li>
                          และต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว
                        </li>
                      </ol>
                      <li>
                        2) การปรึกษากับผู้เชี่ยวชาญด้านการพัฒนาองค์การ
                        (Consultation with a Behavioral Sciences Export)
                      </li>
                      <li>
                        3) การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น (Data
                        Gathering and Preliminary Diagnosis)
                      </li>
                      <li>
                        4) การป้อนกลับข้อมูลและผลการวิเคราะห์ให้ตัวแทนองค์การ
                        (Feedback to a Key Client or Group)
                      </li>
                      <li>
                        5) การวิเคราะห์ปัญหาร่วมกัน (Joint Diagnosis of the
                        Problem)
                      </li>
                      <li>
                        6) การวางแผนปฏิบัติร่วมกัน (Joint Action Planning)
                      </li>
                      <li>7) การดำเนินการตามแผนปฏิบัติการ (Action)</li>
                      <li>
                        8) การรวบรวมข้อมูลหลังการดำเนินการ (Data Gathering after
                        Action)
                      </li>
                    </ol>
                  </ol>
                  <li>
                    รูปแบบทั่วไปของการวางแผนการเปลี่ยนแปลง (General Model of
                    Planned Change)
                  </li>
                  <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                    <li>การกำหนดประเด็นและทำข้อตกลง</li>
                    <ol className="ml-4" style={{ listStyleType: "square" }}>
                      <li> การกำหนดประเด็น (En-tering)</li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>
                          1)
                          ที่ปรึกษาด้านการพัฒนาองค์การศึกษาข้อมูลเบื้องต้นเกี่ยวกับองค์การ
                          เช่น{" "}
                        </li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>พันธกิจ ค่านิยม</li>
                          <li>ความเป็นมา</li>
                          <li>โครงสร้างองค์การ</li>
                          <li>สินค้าและบริการ</li>
                          <li>ความคาดหวังขององค์การ</li>
                          <li>ประสบการณ์ขององค์การ</li>
                        </ol>
                        <li>2) การรวบรวมข้อมูลขององค์การได้จาก</li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>การสังเกตพฤติกรรมการทำงาน</li>
                          <li>การสัมภาษณ์</li>
                          <li>การสำรวจความคิดเห็นด้วยแบบสอบถาม</li>
                          <li>การศึกษาข้อมูลจากเอกสารขององค์การ</li>
                        </ol>
                      </ol>
                      <li>การทำข้อตกลง (Con-tracting)</li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>
                          1) ความคาดหวังของทั้งสองฝ่าย (Expectation of the
                          Parties)
                        </li>{" "}
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>องค์การระบุผลลัพธ์ที่ได้</li>
                          <li>ที่ปรึกษาฯ ระบุค่าตอบแทน และการอ้างอิงผลงาน</li>
                        </ol>
                        <li>2) เวลาและทรัพยากรอื่นๆ (Time and Resources)</li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>ระยะเวลาดำเนินโครงการ</li>
                          <li>ค่าใช้จ่ายที่เกี่ยวข้อง</li>
                        </ol>
                        <li>3) กฎกติกาในการดำเนินโครงการ (Ground Rules)</li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>การรักษาความลับ</li>
                          <li>
                            แนวทางการตัดสินใจแต่ละฝ่ายที่มีความเห็นไม่ตรงกัน
                          </li>
                        </ol>
                      </ol>
                    </ol>
                    <li>
                      การวินิจฉัยระบบ (Diagnosing) ด้วย McKinsey’s 7S Model
                    </li>
                    <li>
                      การวางแผนและปฏิบัติตามแผน (Planning and Implementing
                      Change)
                    </li>
                    <li>
                      การประเมินและรักษาผลของการเปลี่ยนแปลง (Evaluating
                      Institutionalizing Change)
                    </li>
                  </ol>
                  <li>
                    แนวคิดเชิงบวกเกี่ยวกับองค์การ และรูปแบบการเปลี่ยนแปลงเชิงบวก
                    (Positive Organizational Scholarship (POS) and Appreciative
                    Inquiry (AI))
                  </li>
                  <ol className="ml-4" style={{ listStyleType: "square" }}>
                    <li>
                      แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                      Organizational Scholarship (POS)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "" }}>
                      <li>
                        แนวคิดเชิงบวกเกี่ยวกับองค์การ หรือ Positive
                        Organizational Scholarship (POS)
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                        <li>
                          การเบี่ยงเบนเชิงบวก (Positive Deviance)
                          ผลลัพธ์เชิงบวกที่ดีเลิศและกระบวนการที่ทำให้ผลลัพธ์ดังกล่าวเกิดขึ้น
                        </li>
                        <li>
                          การมุ่งปัจจัยด้านบวก (An Affirmative orientation)
                          การให้ความสำคัญกับจุดแข็งแทนที่จะเป็นจุดอ่อน
                          หรือความสัมพันธ์ที่เป็นประโยชน์แทนที่เป็นความสัมพันธ์ที่ก่อให้เกิดปัญหา
                        </li>
                        <li>
                          ความประพฤติที่ซื่อสัตย์และถูกทำนองคลองธรรม
                          (Virtuousness) และการยกระดับกระบวนการต่างๆ (Elevating
                          Process)
                        </li>
                        <ol className="ml-4">
                          <li>เช่น การทำความดีและทำอย่างมีประสิทธิภาพ</li>
                        </ol>
                      </ol>
                    </ol>
                    <li>
                      หลักการพื้นฐานของ POS
                      (แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                      Organizational Scholarship)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "" }}>
                      <li>
                        แนวคิดเชิงบวกเกี่ยวกับองค์การหรือ POS
                        เป็นการอธิบายหลักการพื้นฐานว่า
                        มนุษย์และองค์การดำรงอยู่ในสถานะต่างๆ 3 สถานะ ได้แก่
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                        <li> การเบี่ยงเบนเชิงลบ (Negative Deviance)</li>
                        <ol
                          className="ml-4"
                          style={{ listStyleType: "square" }}
                        >
                          <li>การเบี่ยงเบนเชิงลบก่อให้เกิดจุดอ่อนในองค์การ</li>
                          <li>
                            การเบี่ยงเบนเชิงลบสถานะไม่สามารถปฏิบัติหน้าที่ได้ตามปกติ
                            (Dysfucntion State)
                          </li>
                          <ol
                            className="ml-4"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              เหมือนมนุษย์ที่กำลังป่วย,ภาวะขาดทุน,
                              อาการเจ็บป่วยของพนักงาน,
                              ขาดประสิทธิภาพและประสิทธิผล
                            </li>
                            <li>ปัญหาคุณภาพและความผิดพลาดในการผลิต</li>
                            <li>พฤติกรรมขาดจริยธรรม</li>
                            <li>ความสัมพันธ์ระหว่างบุคคลในอยู่ในภาวะเลวร้าย</li>
                          </ol>
                        </ol>

                        <li> ปกติ (Ordinary)</li>
                        <ol className="ml-4" style={{ listStyleType: "" }}>
                          <li>Ordinary ความเป็นปกติภายในองค์กร</li>
                          <ol
                            className="ml-4"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>Health มีพลัง มีกำลังใจ</li>
                            <li>Effective มีประสิทธิผล</li>
                            <li>Reliable มีความเชื่อถือ</li>
                            <li>Ethical มีจริยธรรม</li>
                            <li>Compromise ประนีประนอม </li>
                          </ol>
                        </ol>
                        <li> การเบี่ยงเบนเชิงบวก (Positive Deviance)</li>
                        <ol className="ml-4" style={{ listStyleType: "" }}>
                          <li>
                            Positive Deviance
                            การเบี่ยงเบนเชิงบวกก่อให้เกิดจุดแข็งในองค์การ
                          </li>
                          <ol
                            className="ml-4"
                            style={{ listStyleType: "disc" }}
                          >
                            <li>
                              สถานะที่ปฏิบัติหน้าที่ได้ดีเลิศ (An Extraodinarily
                              Function State)
                            </li>
                            <li>
                              มนุษย์อยู่ในสถานะมีชีวิตชีวา (Filled with
                              Vitality)
                            </li>
                            <li>ปฏิบัติหน้าที่อย่างราบรื่น</li>
                            <li>องค์การที่มีศักยภาพสูง (Thrive)</li>
                            <li>การปฏิบัติงานขององค์การสอดคล้องกับจริยธรรม</li>
                            <li>สมาชิกขององค์การให้เกียรติซึ่งกันและกัน</li>
                            <li>
                              ความก้าวหน้าเกิดขึ้นในทุกระดับชั้นขององค์การ
                            </li>
                            <li>
                              การกำหนด Mindset เพื่อสร้างพลังบวกให้กับองค์การ
                            </li>
                            <li>การสร้างพลังบวกเพื่อนำไปสู่การเปลี่ยน แปลง</li>
                          </ol>
                        </ol>
                      </ol>
                    </ol>
                    <li>
                      การประยุกต์ใช้รูปแบบการเปลี่ยนแปลงเชิงบวกกับการเปลี่ยนแปลงตามที่วางไว้
                      (The Application of Positive Model)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "" }}>
                      <li>
                        รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                        <li>
                          รูปแบบการเปลี่ยนแปลงเชิงบวก (Appreciate Inquiry: AI)
                          คือการเปลี่ยนจุดแข็งให้เป็นจุดแกร่ง
                        </li>
                        <li>
                          รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                          คือการประยุกต์ใช้การเปลี่ยนแปลงตามที่วางแผนไว้
                        </li>
                        <ol className="ml-4" style={{ listStyleType: "" }}>
                          <li>
                            1) เป็นรูปแบบลัทธิการสร้างสังคม (Social
                            Constructionism)
                            มีลักษณะเชิงปฏิวัติเพื่อนำไปสู่การเปลี่ยนแปลง
                          </li>
                          <li>
                            2)
                            สนับสนุนการใช้ค่านิยมเชิงบวกในการวินิจฉัยและเปลี่ยนแปลงองค์การ
                          </li>
                          <li>
                            3) การร่วมกันค้นหาสิ่งที่ดีที่สุดในตัวมนุษย์
                            เป็นการเปลี่ยนแปลงในระบบมนุษย์
                          </li>
                          <li>
                            4)
                            ระบบที่มีประสิทธิผลและความสามารถสูงสุดในเชิงเศรษฐกิจ
                            (Economy) นิเวศวิทยา (Ecology) และความเป็นมนุษย์
                            (Human Terms)
                          </li>
                          <li>
                            5) กระบวนการเปลี่ยนแปลงที่เริ่มจากจุดแข็ง
                            (จุดแข็งมาชนกับโอกาส)
                          </li>
                          <li>
                            6)
                            สร้างโอกาสการเจริญเติบโตและเปลี่ยนแปลงด้วยการค้นหาสิ่งที่ดำเนินไปด้วยดีในระบบนั้น
                          </li>
                        </ol>
                      </ol>
                    </ol>
                    <li>ที่ปรึกษาด้านการพัฒนาองค์การ (OD Practitioner)</li>
                    <ol className="ml-4" style={{ listStyleType: "" }}>
                      <li>
                        ที่ปรึกษาด้านการพัฒนาองค์การ มีชื่อเรียกแตกต่างกัน
                        ดังนี้
                      </li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>OD Practitioner</li>
                        <li>OD Consultants</li>
                        <li>OD Expert</li>
                        <li>Change Agent</li>
                        <li>Change Leader</li>
                      </ol>
                    </ol>
                    <li>บุคคลที่มีบทบาทต่อการเปลี่ยนแปลงองค์การ</li>
                    <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                      <li> ลูกค้า (Client) </li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>
                          หมายถึง ผู้ที่เป็นสมาชิกขององค์การ ได้แก่ ประธาน
                          รองประธานอาวุโส ผู้จัดการ พนักงาน ฯลฯ
                          ที่ต้องการเปลี่ยนแปลงและติดต่อขอความช่วยเหลือจากผู้อื่น
                          โดยมีบทบาท ดังนี้
                        </li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>แสดงออกถึงความไม่พอใจในสถานะเดิม (Status Quo)</li>
                          <li>
                            จินตนาการถึงความเป็นไปได้ของสิ่งที่แตกต่างจากเดิม
                          </li>
                          <li> สนับสนุนโครงการตั้งแต่เริ่มต้นจนเสร็จสิ้น</li>
                        </ol>
                      </ol>
                      <li>ที่ปรึกษาด้านการพัฒนาองค์การ (Change Consultant)</li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>
                          คือผู้ที่มีบทบาทคล้ายกับสถาปนิก (Architect)
                          ของกระบวนการเปลี่ยนแปลงเพื่อตอบสนองปัจจัยทางการเงิน
                          การเมือง เทคนิค วัฒนธรรม โครงสร้างและจิตวิญญาณ
                          โดยมีบทบาท ดังนี้
                        </li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>
                            แปลงความต้องการของลูกค้าเป็นแผนการเปลี่ยนแปลงเบื้องต้น
                          </li>
                          <li>
                            ให้การสนับสนุนความรู้ด้านเทคนิคในการออกแบบและการนำแผนการเปลี่ยนแปลงไปสู่การปฏิบัติ
                          </li>
                          <li>
                            {" "}
                            พิจารณาความพร้อมในการเปลี่ยนแปลง และดำเนินการต่างๆ
                            เพื่อเพิ่มความพร้อมดังกล่าวหากจำเป็น
                          </li>
                          <li>
                            ให้คำแนะนำผู้นำองค์การ Champions
                            และทีมที่ดำเนินการเปลี่ยนแปลง
                            รวมทั้งการจัดการต่อต้าน
                          </li>
                          <li>
                            {" "}
                            เป็นผู้นำในการสื่อสารการเปลี่ยนแปลง
                            และทำให้กระบวนการเปลี่ยนแปลงสอดคล้องกับระบบในระหว่างดำเนินการเปลี่ยนแปลง
                          </li>
                        </ol>
                      </ol>
                      <li>ขวัญใจพนักงาน (Champions)</li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>คือผู้ที่เคยประสบความสำเร็จ มีบทบาท ดังนี้</li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>
                            รับผิดชอบงานหนึ่งๆ
                            เกี่ยวกับการนำแผนการเปลี่ยนแปลงไปสู่การปฏิบัติ
                          </li>
                          <li>
                            ให้ข้อมูลป้อนกลับเกี่ยวกับกระบวนการเปลี่ยนแปลง
                            ริเริ่มแก้ไข
                            ปรับเปลี่ยนรายละเอียดในตอนกลางของการเปลี่ยนแปลง
                          </li>
                          <li> ตรวจสอบความถูกต้องของกระบวนการเปลี่ยนแปลง</li>
                          <li> กำหนดวิธีการทำงาน</li>
                          <li>
                            รับผิดชอบการบริหารการเปลี่ยนแปลงในหน่วยงานที่อยู่ในความรับผิดชอบ
                          </li>
                          <li>
                            โน้มน้าวให้พนักงานจำนวนมากเข้าร่วมผลักดันการเปลี่ยนแปลงให้ประสบความสำเร็จ
                          </li>
                          <li>
                            ใช้ข้อมูลสร้างความมั่นใจ ตอบสนองต่อการต่อต้าน
                            และปรับแผนการเปลี่ยนแปลงให้สอดคล้องกับความคิดเห็นของผู้ต่อต้าน
                          </li>
                          <li> เฉลิมฉลองความสำเร็จ</li>
                        </ol>
                      </ol>

                      <li> พนักงานและผู้จัดการ (Staff and Managers)</li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li></li>
                        <ol className="ml-4" style={{ listStyleType: "disc" }}>
                          <li>
                            ให้ข้อมูลเกี่ยวกับสิ่งที่ต้องการเปลี่ยนแปลงและวิธีการเปลี่ยนแปลงสิ่งนั้น
                          </li>
                          <li>
                            ใช้ความเชี่ยวชาญของตนในการช่วยรักษาผลของการเปลี่ยนแปลง
                          </li>
                          <li>
                            ปฏิบัติงานในความรับผิดชอบเพื่อตรวจสอบกระบวนการเปลี่ยนแปลง
                          </li>
                          <li> เฉลิมฉลองความสำเร็จ</li>
                        </ol>
                      </ol>
                    </ol>
                    <li>
                      ที่ปรึกษาภายในและภายนอก (Internal and External
                      Practitioners)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                      <li>ที่ปรึกษาภายนอก ได้แก่</li>
                      <ol className="ml-4" style={{ listStyleType: "disc" }}>
                        <li>
                          บุคคลที่ได้รับการว่าจ้างให้ช่วยเปลี่ยนแปลงองค์การ
                        </li>
                        <li>พนักงานบริษัทที่ให้คำปรึกษา (Consulting Firm)</li>
                        <li>บุคลากรของมหาวิทยาลัย หรือวิทยากรที่ปรึกษาอิสระ</li>
                      </ol>
                      <li>ที่ปรึกษาภายใน ได้แก่</li>
                      <ol className="ml-4" style={{ listStyleType: "" }}>
                        <li>
                          บุคลากรขององค์การทั้งที่ที่ปฏิบัติงานด้าน OD โดยเฉพาะ
                        </li>
                        หรือที่ปฏิบัติงานด้านอื่นร่วม เช่น งานด้านฝึกอบรม
                        งานด้านทรัพยากรมนุษย์
                      </ol>
                    </ol>
                    <li>
                      คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ (Competencies of
                      Practitioners)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                      <li>
                        ทักษะด้านการทำความเข้าใจตนเอง หรือ Competency
                        ด้านการบริหารอารมณ์ความรู้สึกของตนเอง
                      </li>
                      <li>
                        ทักษะการสร้างความสัมพันธ์กับผู้อื่น (Interpersonal
                        Skills)
                      </li>
                      <li>
                        ทักษะการให้คำปรึกษาทั่วไป (General Consultation Skills)
                      </li>
                      <li>
                        ทฤษฎีเกี่ยวกับการพัฒนาองค์การ (Organization Development
                        Theory)
                      </li>
                      <li> เป็นนักวิเคราะห์ (Diagnostician)</li>
                      <li>
                        เป็นนักวิจัยสังคมวิทยา (Social Scientist Researcher)
                      </li>
                      <li> เป็นนักเปลี่ยนแปลง (Interventionist)</li>
                      <li>
                        เป็นผู้ให้ความรู้หรือนักฝึกอบรม (Educator or Trainer)
                      </li>
                      <li> เป็นผู้อำนวยความสะดวก (Facilitator)</li>
                      <li>เป็นผู้ฝึกสอน (Coach)</li>
                    </ol>
                    <li>
                      ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การจะต้องประกอบด้วย
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                      <li> ความรู้ (Knowledge)</li>
                      <li>
                        การยึดมั่นในมาตรฐานสูงสุดของจริยธรรมและอาชีพ
                        (Commitment)
                      </li>
                      <li>ความสามารถในการสร้างเครือข่าย (Network Ability)</li>
                      <li> ทักษะในการแสวงหาข้อมูล (Elicitation Skills)</li>
                      <li>
                        ทักษะการประเมินและการบูรณาการ (Evaluation and
                        Integration Skills)
                      </li>
                      <li>
                        ทักษะการวินิจฉัยและการนำเสนอแนวทาง (Diagnostic and
                        Prognosis Skills)
                      </li>
                    </ol>
                    <li>
                      จริยธรรมของที่ปรึกษาด้านการพัฒนาองค์การ(Professional
                      Ethics)
                    </li>
                    <ol className="ml-4" style={{ listStyleType: "decimal" }}>
                      <li> การสำแดงข้อมูลเท็จ (Misrepresentation)</li>
                      <li> การนำข้อมูลไปใช้ในทางที่ผิด (Misuse of Data)</li>
                      <li>การบังคับ (Coecion)</li>
                      <li>
                        ความเห็นต่างในค่านิยมและเป้าหมาย (Value and Goal
                        Conflict)
                      </li>
                      <li>ความไม่พร้อมด้านเทคนิค (Technical Ineptness)</li>
                    </ol>
                    .
                  </ol>
                </ol>
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                neque dicta incidunt ullam ea hic porro optio ratione repellat
                perspiciatis. Enim, iure!
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
