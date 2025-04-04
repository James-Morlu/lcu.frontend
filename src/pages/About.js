import React from "react";

function About() {
  return (
    <div className="px-3" style={{ backgroundColor: "purple", minHeight: "100vh", padding: "20px", color: "white"}}>
      <h4 className="text-center">History Profile of Lofa County University (LCU)</h4>

      <section>
        <h5>Origins as a Community College</h5>
        <p>
          Lofa County University (LCU), formerly known as Lofa County Community College (LCCC), was established by an act of the
          Liberian Legislature in 2010. The institution began its operations in 2012, with a vision to provide quality education and contribute to regional development.
        </p>
        <p>
          The first president of the institution, Dr. James K. Kollie Sr., played a key role in laying the foundation for the college. Under his leadership, LCCC began offering four core academic departments:
        </p>
        <ul>
          <li>Engineering</li>
          <li>Health Sciences</li>
          <li>Agriculture</li>
          <li>Teachers' Education</li>
        </ul>
        <p>
          The first graduation ceremony was held in 2016 under Dr. Kollie’s leadership, marking a major milestone for the institution.
        </p>
      </section>

      <section>
        <h5>Transition to a University under Dr. Ngaima's Leadership</h5>
        <p>
          In 2018, Dr. Samuel K. Ngaima Sr. took over as the president and spearheaded the elevation of LCCC to a full-fledged university, which was renamed Lofa County University (LCU). During his tenure, the institution grew rapidly, expanding its academic programs and becoming a recognized center of learning in Liberia.
        </p>
        <p>
          Under Dr. Ngaima’s leadership, the university was divided into six colleges:
        </p>
        <ul>
          <li>College of Engineering Science & Technology</li>
          <li>College of Agriculture & Food Sciences</li>
          <li>College of Business & Public Administration</li>
          <li>College of Social Sciences & Humanities</li>
          <li>College of Teachers' Education</li>
          <li>College of Health Sciences</li>
        </ul>
        <p>
          Dr. Ngaima led the university through four successful graduation ceremonies:
        </p>
        <ul>
          <li>2018 – First batch of graduates</li>
          <li>2019 – Second batch of graduates</li>
          <li>2020 – Third batch of graduates</li>
          <li>2022 – Fourth batch of graduates</li>
        </ul>
      </section>

      <section>
        <h5>Recent Developments Under Dr. Podah's Leadership</h5>
        <p>
          In 2024, Dr. Isaac P. Podah assumed the presidency of Lofa County University. He has continued to build upon the foundation laid by his predecessors and further elevated the status of LCU.
        </p>
        <p>
          Under Dr. Podah, the university achieved another significant milestone with the graduation of the sixth batch of students in December 2024.
        </p>
      </section>

      <section>
        <h5>Graduation Statistics</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Batch Year</th>
              <th>Total Graduates</th>
              <th>Male Graduates</th>
              <th>Female Graduates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First-July 11, 2016</td>
              <td>146</td>
              <td>124</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Second-Feb. 23,2017 & 2018(Combined)</td>
              <td>413</td>
              <td>316</td>
              <td>97</td>
            </tr>
            <tr>
              <td>Third-March 23,2019</td>
              <td>277</td>
              <td>189</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Fourth-Dec. 19,2020</td>
              <td>375</td>
              <td>299</td>
              <td>76</td>
            </tr>
            <tr>
              <td> Fifth-Nov. 26,2022</td>
              <td>373</td>
              <td>263</td>
              <td>110</td>
            </tr>
            <tr>
              <td>Sixth-Dec. 2024</td>
              <td>202</td>
              <td>135</td>
              <td>67</td>
            </tr>
            <tr>
              <th>Grand Total:</th>
              <th>1,786</th>
              <th>1,326</th>
              <th>460</th>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default About;
