import { nanoid } from "nanoid";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWords } from "../../hooks";
import {
  setCourses,
  setEducation,
  setExperience,
  setHobbies,
  setLanguages,
  setPersonal,
  setProjects,
  setReferences,
  setSkills,
  setSocial,
} from "../../stores/form";
import { setContentEditable } from "../../stores/site";
import { Button } from "../_form";
import styles from "./index.module.css";

const LOCAL_STORAGE_APP = "cv-maker-app";

export const FormButtons = ({ handlePrint }) => {
  const dispatch = useDispatch();
  const words = useWords();

  const inputFile = useRef(null);

  const {
    personal,
    languages,
    hobbies,
    education,
    experience,
    skills,
    projects,
    courses,
    references,
    social,
  } = useSelector((state) => state.form);
  const { isContentEditable } = useSelector((state) => state.site);

  const uploadSample = () => {
    dispatch(
      setPersonal({
        nameSurname: "John Doe",
        title: "Front-End Web Developer",
        photo: "blank.webp",
        address: "New York / USA",
        gsm: "001 408 408 4848",
        letter: "hi@johndoe.dev",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta quasi perspiciatis placeat voluptas, inventore vero atque minus cum quae unde quis qui quia odit suscipit ipsa dignissimos dolorum in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta quasi perspiciatis placeat voluptas, inventore vero atque minus cum quae unde quis qui quia odit suscipit ipsa dignissimos dolorum in!",
      })
    );
    dispatch(
      setSocial([
        {
          _id: nanoid(),
          name: "Twitter",
          link: "johndoe",
        },
        {
          _id: nanoid(),
          name: "Github",
          link: "johndoe",
        },
        {
          _id: nanoid(),
          name: "LinkedIn",
          link: "johndoe",
        },
        {
          _id: nanoid(),
          name: "Website",
          link: "https://johndoe.dev",
        },
        {
          _id: nanoid(),
          name: "URL",
          link: "https://example.com",
        },
      ])
    );
    dispatch(
      setLanguages([
        {
          _id: nanoid(),
          name: "Spanish",
          level: "C2",
        },
        {
          _id: nanoid(),
          name: "Italian",
          level: "B1",
        },
      ])
    );
    dispatch(
      setHobbies([
        {
          _id: nanoid(),
          name: "Swimming",
        },
        {
          _id: nanoid(),
          name: "Fitness",
        },
        {
          _id: nanoid(),
          name: "Chess",
        },
        {
          _id: nanoid(),
          name: "Camping",
        },
      ])
    );
    dispatch(
      setEducation([
        {
          _id: nanoid(),
          school: "Massachusetts Institute of Technology",
          subject: "Computer Science",
          city: "Cambridge/USA",
          degree: "Bachelor Degree",
          from: "Sep, 2016",
          to: "Jun, 2020",
        },
        {
          _id: nanoid(),
          school: "Massachusetts Institute of Technology",
          subject: "Computer Science",
          city: "Cambridge/USA",
          degree: "Bachelor Degree",
          from: "Sep, 2016",
          to: "Jun, 2020",
        },
      ])
    );
    dispatch(
      setExperience([
        {
          _id: nanoid(),
          company: "Facebook Inc.",
          position: "Front-End Developer",
          city: "California/USA",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora repellat reiciendis quis pariatur vero impedit dicta nobis eos similique facilis!",
          from: "Nov, 2020",
          to: "Sep, 2021",
        },
        {
          _id: nanoid(),
          company: "Facebook Inc.",
          position: "Front-End Developer",
          city: "California/USA",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora repellat reiciendis quis pariatur vero impedit dicta nobis eos similique facilis!",
          from: "Nov, 2021",
          to: "Sep, 2022",
        },
      ])
    );
    dispatch(
      setSkills([
        {
          _id: nanoid(),
          name: "HTML",
          level: 9,
        },
        {
          _id: nanoid(),
          name: "CSS",
          level: 10,
        },
        {
          _id: nanoid(),
          name: "JavaScript",
          level: 8,
        },
      ])
    );
    dispatch(
      setProjects([
        {
          _id: nanoid(),
          name: "Sample Project",
          link: "https://github.com/johndoe/sample-project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eligendi cumque sunt incidunt atque labore assumenda ratione tempore officia!",
        },
        {
          _id: nanoid(),
          name: "Sample Project",
          link: "https://github.com/johndoe/sample-project",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eligendi cumque sunt incidunt atque labore assumenda ratione tempore officia!",
        },
      ])
    );
    dispatch(
      setCourses([
        {
          _id: nanoid(),
          name: "Advanced JavaScript Course",
          company: "Udemy",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          from: "Oct, 2018",
          to: "Dec, 2018",
        },
        {
          _id: nanoid(),
          name: "Spanish Course",
          company: "Udemy",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          from: "Oct, 2018",
          to: "Dec, 2018",
        },
      ])
    );
    dispatch(
      setReferences([
        {
          _id: nanoid(),
          name: "John Doe",
          title: "Sr. Full-Stack Developer",
          gsm: "001 408 408 4848",
          company: "JD Development",
        },
        {
          _id: nanoid(),
          name: "John Doe",
          title: "Sr. Full-Stack Developer",
          gsm: "001 408 408 4848",
          company: "JD Development",
        },
      ])
    );
  };

  useEffect(() => {
    const json = {
      personal: personal,
      languages: languages,
      hobbies: hobbies,
      education: education,
      experience: experience,
      skills: skills,
      projects: projects,
      courses: courses,
      references: references,
      social: social,
    };
    localStorage.setItem(LOCAL_STORAGE_APP, JSON.stringify(json));
  }, [
    personal,
    languages,
    hobbies,
    education,
    experience,
    skills,
    projects,
    courses,
    references,
    social,
  ]);

  const clearData = () => {
    if (window.confirm(words.confirm)) {
      dispatch(setCourses([]));
      dispatch(setEducation([]));
      dispatch(setExperience([]));
      dispatch(setHobbies([]));
      dispatch(setLanguages([]));
      dispatch(setPersonal({}));
      dispatch(setProjects([]));
      dispatch(setReferences([]));
      dispatch(setSkills([]));
      dispatch(setSocial([]));
    }
  };

  const exportData = () => {
    const json = {
      personal: personal,
      languages: languages,
      hobbies: hobbies,
      education: education,
      experience: experience,
      skills: skills,
      projects: projects,
      courses: courses,
      references: references,
      social: social,
    };

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(json, null, 2)
    )}`;

    const link = document.createElement("a");
    const date = new Date().toLocaleDateString().replace(/\//g, "-");

    link.href = jsonString;
    link.download = `${personal.nameSurname
      .split(" ")
      .join("-")}-CV-Data-${date}.json`;
    link.click();
  };

  const importData = (data) => {
    dispatch(setCourses(data.courses));
    dispatch(setEducation(data.education));
    dispatch(setExperience(data.experience));
    dispatch(setHobbies(data.hobbies));
    dispatch(setLanguages(data.languages));
    dispatch(setPersonal(data.personal));
    dispatch(setProjects(data.projects));
    dispatch(setReferences(data.references));
    dispatch(setSkills(data.skills));
    dispatch(setSocial(data.social));
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      importData(JSON.parse(e.target.result));
    };
  };

  return (
    <div className={styles.container}>
      <Button
        onClick={uploadSample}
        variant="success"
        disabled={Object.keys(personal).length !== 0}
      >
        {words.sample}
      </Button>
      <Button
        onClick={clearData}
        variant="danger"
        disabled={Object.keys(personal).length === 0}
      >
        {words.clear_all}
      </Button>
      <Button
        onClick={handlePrint}
        variant="info"
        disabled={Object.keys(personal).length === 0}
      >
        {words.pdf}
      </Button>
      <Button
        onClick={() => dispatch(setContentEditable(!isContentEditable))}
        variant={isContentEditable ? "success" : "danger"}
        disabled={Object.keys(personal).length === 0}
      >
        {words.live_edit}
      </Button>
      <Button
        onClick={exportData}
        variant="success"
        disabled={Object.keys(personal).length === 0}
      >
        {words.export}
      </Button>
      <Button
        onClick={() => {
          inputFile.current.click();
        }}
        variant="success"
        disabled={Object.keys(personal).length !== 0}
      >
        {words.import}
      </Button>
      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={handleChange}
        accept=".json"
        style={{ display: "none" }}
      />
    </div>
  );
};
