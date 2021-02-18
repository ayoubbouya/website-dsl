import React from "react";
import Company from "./Company";
import company1 from "./image17.svg";
import company2 from "./image16.svg";

import line from "../../About-team/management/images/lineRed.svg";
import styles from "./styles.module.css";
function Companies() {
  return (
    <div>
      <div className={styles.head}>
        {" "}
        <h1>Client Line-Up</h1>
        <img src={line} alt="lineRed" className={styles.lineRed} />
      </div>
      <div className={styles.bg}>
        <Company
          image={company1}
          headingH1="Bank Tabungan Negara"
          headingH2="Project WB-Bank BTN :"
          paragraph1="Application Development Project Teller System or known as Web Applications Branch for Bank BTN.
        Project is to replace the existing application at Bank BTN is running under the Windows platform or desktop applications into Web-based applications applications. "
          paragraph2="Branch Web application will be implemented throughout the Bank BTN - Indonesia, about 600 BTN Office. "
          list1="Web framework: tapestry 5.3"
          list2="Back end : spring 3.1 + jpa 2"
          list3="Security: apache shiro"
          list4="Database: ibm db2 9.7"
        />
      </div>
      <Company
        image={company2}
        headingH1="Bank BPR KS"
        headingH2="Mobile Banking :"
        paragraph1="This project provides delivery channel application over mobile device for customer to perform banking and financial transactions, such as inquiry balance, overbook, purchase, and payment.
        Using: JAVA technologies, PostgreSQL, Android technologies, iOS technologies, Blackberry technologies "
      />
    </div>
  );
}

export default Companies;
