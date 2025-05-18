import React, { useEffect, useState, useRef, useContext } from 'react';
import Pills from './Pills';
import { IoClose } from 'react-icons/io5';

import { Skills } from '../constants/Data';
import { StepperContext } from '../contexts/StepperContext';

const SkillsInput = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestionSkills, setSuggestionSkills] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    const filteredSkills = Skills.filter(
      (skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !userData.skills.includes(skill) // Exclude selected skills
    );
    setSuggestionSkills(filteredSkills);
  }, [searchTerm, userData.skills]);

  const handleSelectSkill = (skill) => {
    const updatedSkills = [...userData.skills, skill];
    setUserData({ ...userData, skills: updatedSkills });
    setSearchTerm('');
    // Don't clear suggestions entirely, update filter instead
    setSuggestionSkills(suggestionSkills.filter((s) => s !== skill));
    inputRef.current.focus();
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = userData.skills.filter(
      (selectedSkill) => selectedSkill !== skill
    );
    setUserData({ ...userData, skills: updatedSkills });
    // Re-filter suggestions to include the removed skill
    setSuggestionSkills(
      Skills.filter(
        (skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !updatedSkills.includes(skill)
      )
    );
  };

  return (
    <>
      <div className="rounded-lg w-full focus:border-blue-300">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add your Skill
        </label>
        <div className="flex flex-wrap gap-2 my-2">
          {userData.skills.map((skill) => (
            <div key={skill} className="flex items-center">
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="flex items-center justify-center px-2 bg-indigo-100 text-indigo-500 text-sm max-lg:text-xs rounded-lg cursor-pointer"
              >
                {skill} <IoClose className="ml-1" />
              </button>
            </div>
          ))}
        </div>

        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Add Skills"
          className="outline-none rounded-lg placeholder:text-sm placeholder:text-zinc-500 py-2 px-2 border border-gray-400 focus:ring-1 focus:border-0 w-3/4"
        />
      </div>
      {/* Suggestion */}
      {searchTerm.length > 0 &&
        suggestionSkills.length > 0 && ( // Show suggestions only if there's a search term and suggestions exist
          <div className="relative">
            <ul className="bg-white rounded-md absolute top-1 w-72">
              {suggestionSkills.slice(0, 5).map((skill) => (
                <li
                  key={skill}
                  onClick={() => handleSelectSkill(skill)}
                  className="flex items-center gap-2 p-1 px-2 my-2 hover:bg-gray-200 cursor-pointer text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};

export default SkillsInput;
