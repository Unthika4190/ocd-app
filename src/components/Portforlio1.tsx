import Link from "next/link";
import React from "react";

export default function Portforlio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
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
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-1-66.pdf"
                  target="_blank"
                >
                  ศึกษารายระเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงภาครัฐให้เกิดประสิทธิผล</h3>
                <p>
                  การบริหารงานภาครัฐแนวใหม่ (New Public Management) คือ
                  การปรับเปลี่ยนการบริหารจัดการภาครัฐโดยนำหลักการเพิ่มประสิทธิภาพของระบบราชการและการแสวงหาประสิทธิภาพในการปฏิบัติราชการที่มุ่งสู่ความเป็นเลิศ
                  โดยการนำเอาแนวทางหรือวิธีการบริหารงานของภาคเอกชนมาปรับใช้กับการบริหารงานภาครัฐ
                </p>
                <p>
                  เช่น การบริหารงานแบบมุ่งเน้นผลสัมฤทธิ์ การบริหารงานแบบมืออาชีพ
                  การคำนึงถึงหลักความคุ้มค่า
                  การจัดการโครงสร้างที่กะทัดรัดและแนวราบ
                  การเปิดโอกาสให้เอกชนเข้ามาแข่งขันการให้บริการสาธารณะ
                  การให้ความสำคัญต่อค่านิยม จรรยาบรรณวิชาชีพ คุณธรรมและจริยธรรม
                  ตลอดทั้งการมุ่งเน้นการให้บริการแก่ประชาชนโดยคำนึงถึงคุณภาพเป็นสำคัญ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-67-71.pdf"
                  target="_blank"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะ
                </h3>
                <p>
                  การเปลี่ยนผ่านสู่ระบบดิจิทัลเป็นกระบวนการที่องค์กรนำไปใช้เพื่อรวมเทคโนโลยีดิจิทัลในทุกด้านของธุรกิจ
                  กระบวนการนี้จะเปลี่ยนแปลงวิธีการที่องค์กรส่งมอบคุณค่าให้กับลูกค้าโดยพื้นฐาน
                  บริษัทต่าง ๆ
                  นำเทคโนโลยีดิจิทัลที่เป็นนวัตกรรมมาใช้เพื่อสร้างการเปลี่ยนแปลงทางวัฒนธรรมและการดำเนินงานที่ปรับให้เข้ากับความต้องการของลูกค้าที่เปลี่ยนแปลงไปได้ดีมากยิ่งขึ้น
                  ตัวอย่างของการเปลี่ยนผ่านสู่ระบบดิจิทัลมีดังนี้
                </p>
                <p></p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-72-75.pdf"
                  target="_blank"
                >
                  View Project
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  7
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target="_blank"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  การเปลี่ยนแปลงเป็นสิ่งที่หลีกเลี่ยงไม่ได้ในทุกองค์กร
                  โดยเฉพาะอย่างยิ่งภาครัฐ ซึ่งต้องเผชิญกับความท้าทายใหม่ๆ
                  อยู่เสมอ ไม่ว่าจะเป็นการเปลี่ยนแปลงทางเทคโนโลยี สังคม
                  หรือเศรษฐกิจ
                </p>
                <p>
                  การสร้างความพร้อมในการเปลี่ยนแปลงภายในภาครัฐจึงเป็นเรื่องสำคัญอย่างยิ่ง
                  เพื่อให้สามารถปรับตัวและตอบสนองต่อสถานการณ์ที่เปลี่ยนแปลงไปได้อย่างมีประสิทธิภาพ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-79-82.pdf"
                  target="_blank"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Six */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>แบบสำรวจการจัดการการเปลี่ยนแปลงมากกว่า 100 ข้อ</p>
                <p>
                  การสำรวจการจัดการการเปลี่ยนแปลงช่วยปรับกระบวนการเปลี่ยนแปลงของบริษัทของคุณให้มีประสิทธิภาพมากขึ้น
                  ใช้คำถามในบทความนี้เพื่อสำรวจพนักงานของคุณในระหว่างโครงการเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-83-85.pdf"
                  target="_blank"
                >
                  ศึกษารายระเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Seven */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด สำหรับบทความนี้
                  Humanica
                  จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-86-89.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="project-inner">
            {/* Project Eight */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    7 กลยุทธ์ในการเอาชนะการต่อต้านการเปลี่ยนแปลงในสถานที่ทำงาน
                  </Link>
                </p>
                <p>
                  เราหารือถึงสิ่งที่ทำให้ผู้คนตอบสนองต่อความพยายามในการเปลี่ยนแปลงในแบบของตนเอง
                  และอธิบายแนวทางในการเอาชนะอุปสรรคต่อการเปลี่ยนแปลงในสถานที่ทำงาน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-90-92.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project Nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change)
                </h3>
                <p>
                  <Link
                    href="https://primeast.com/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    องค์ประกอบที่สำคัญของวิสัยทัศน์แห่งการเปลี่ยนแปลงที่ประสบความสำเร็จ
                  </Link>
                </p>
                <p>
                  รื่องราว การเปลี่ยนแปลง — เป็นเวลานาน
                  เพื่อการเปลี่ยนแปลงที่ประสบความสำเร็จ
                  การเปลี่ยนแปลงองค์กรที่ประสบความสำเร็จ ไม่ว่าจะเล็กหรือใหญ่
                  จะต้องเริ่มต้นจากวิสัยทัศน์ที่ชัดเจนและน่าสนใจเกี่ยวกับสถานะที่ต้องการ
                  เพื่อจูงใจและจัดแนวผู้ที่ได้รับผลกระทบจากวิธีการใหม่ที่ต้องการ
                  ไม่ว่าการเปลี่ยนแปลงใหม่จะน่าตื่นเต้นเพียงใด
                  เราก็พบว่าไม่เพียงพอที่ CEO
                  หรือทีมผู้นำการเปลี่ยนแปลงจะกำหนดวิสัยทัศน์เพื่อการเปลี่ยนแปลง{" "}
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-93-98.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <Link
                    href="https://lsaglobal.com/essential-components-of-a-successful-vision-for-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การสร้างวิสัยทัศน์ (Vision )
                  </Link>
                </p>
                <p>
                  ให้กับแบรนด์ให้ได้อย่างสมบูรณ์แบบนั้นอาจดูแล้วยากและกินเวลาในการทำงานมากจนเกินไป
                  ซึ่งอันที่จริงแล้วก็ไม่จำเป็นต้องมานั่งประดิษฐ์ประดอยคำให้มันสวยหรูเพื่อทำให้มันดูสมบูรณ์แบบขนาดนั้นครับ
                  แค่เพียงแต่นำข้อมูลต่างๆที่คุณมีอยู่มาร้อยเรียงและสร้างแนวทางที่เหมาะสมกับคุณมันจะทำให้
                  Vision นั้นออกมาดูดีกว่าครับ
                  เรามาดูกันครับว่ามีกี่ข้อที่จำเป็นต้องรู้ในการนำมาเขียน Vision
                  Statement กันบ้าง
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="project-inner">
            {/* Project Eleven */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://simplystakeholders.com/key-stakeholder-identification/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ผู้มีส่วนได้ส่วนเสียหมายถึงบุคคล กลุ่ม หรือองค์กรใดๆ
                    ที่อาจได้รับผลกระทบ มีอิทธิพล
                    หรือมีความสนใจในโครงการหรืองานของคุณ
                  </Link>
                </p>
                <p>
                  ผู้มีส่วนได้ส่วนเสียที่สำคัญหมายถึงผู้มีส่วนได้ส่วนเสียที่มีความเสี่ยงหรือผลตอบแทนที่อาจสูงกว่า
                  และมีความสำคัญต่อความสำเร็จของโครงการของคุณ
                  ผู้มีส่วนได้ส่วนเสียเหล่านี้จะต้องมีการบริหารจัดการที่ใกล้ชิด
                  การติดตามอย่างสม่ำเสมอ และ/หรือการมีส่วนร่วมในระดับที่สูงขึ้น{" "}
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="project-inner">
            {/* Project Twelve */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://www.linkedin.com/advice/3/what-best-strategies-influence-stakeholders-across-different"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    กลยุทธ์ที่ดีที่สุดในการโน้มน้าวผู้มีส่วนได้ส่วนเสียในแต่ละฟังก์ชันและระดับคืออะไร
                  </Link>
                </p>
                <p>
                  การโน้มน้าวใจเป็นทักษะสำคัญสำหรับผู้นำ
                  โดยเฉพาะอย่างยิ่งเมื่อพวกเขาต้องร่วมมือกับผู้มีส่วนได้ส่วนเสียจากหลายฟังก์ชันและหลายระดับ
                  ไม่ว่าคุณจะทำงานในโครงการ ริเริ่มการเปลี่ยนแปลง
                  หรือตัดสินใจเชิงกลยุทธ์
                  คุณจำเป็นต้องโน้มน้าวใจผู้อื่นให้สนับสนุนเป้าหมายและวิสัยทัศน์ของคุณ
                  แต่คุณจะทำสิ่งนั้นได้อย่างไรหากไม่มีอำนาจหรืออำนาจอย่างเป็นทางการ
                  ต่อไปนี้คือกลยุทธ์บางประการที่จะช่วยให้คุณโน้มน้าวผู้มีส่วนได้ส่วนเสียได้อย่างมีประสิทธิภาพและถูกต้องตามจริยธรรม
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-107-110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="project-inner">
            {/* Project Thirteen */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management
                  Structures)
                </h3>
                <p>
                  <Link
                    href="https://www.bmc.com/blogs/change-management-roles/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    คณะกรรมการที่ปรึกษาการเปลี่ยนแปลง (CAB)
                  </Link>
                </p>
                <p>
                  นี่คือทีมที่ควบคุมวงจรชีวิตของการเปลี่ยนแปลงในกระบวนการทั้งหมดตามที่ระบุไว้ในฟังก์ชันการเปลี่ยนผ่านบริการของ
                  ITIL
                  คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงประกอบด้วยสมาชิกระดับสูงจากโดเมนต่างๆ
                  รวมถึงความปลอดภัยของข้อมูล การดำเนินงาน การพัฒนา เครือข่าย
                  แผนกบริการ และความสัมพันธ์ทางธุรกิจ เป็นต้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-111-114.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project Fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum)</h3>
                <p>
                  <Link
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6088241/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การดูแลแบบประคับประคองในศัลยกรรม:
                    การกำหนดลำดับความสำคัญของการวิจัย
                  </Link>
                </p>
                <p>
                  การดูแลแบบประคับประคองเป็นสาขาเฉพาะทางหลายสาขาที่มุ่งบรรเทาความทุกข์ทรมานและสนับสนุนคุณภาพชีวิตของผู้ป่วยที่ป่วยหนักและครอบครัวของพวกเขา
                  ในคำชี้แจงเกี่ยวกับหลักการของการดูแลแบบประคับประคองในการผ่าตัด
                  American College of Surgeons
                  ยอมรับถึงบทบาทของการดูแลแบบประคับประคองในการรักษาผู้ป่วยที่ต้องผ่าตัดและมีอาการป่วยร้ายแรง
                  และเน้นย้ำถึงความจำเป็นในการดูแลแบบประคับประคองควบคู่ไปกับการรักษาด้วยการผ่าตัดเพื่อยืดชีวิตและรักษาให้หายขาด1แม้ว่าการรักษาด้วยการผ่าตัดจะก่อให้เกิดภาระและโรคทางการผ่าตัดที่มักทำให้ชีวิตสั้นลง
                  แต่การดูแลแบบประคับประคองยังคงไม่เพียงพอสำหรับผู้ป่วยที่ต้องผ่าตัด
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/ilovepdf_split-range (2)/4 การดำเนินการเปลี่ยนแปลง-115-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายระเอียดเพิ่มเติม→
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
