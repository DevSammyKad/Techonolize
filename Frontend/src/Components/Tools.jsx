import React, { useEffect, useState, useRef, useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { ToolsIconData } from '../constants/Data';
import { StepperContext } from '../contexts/StepperContext';

const Tools = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestionTools, setSuggestionTools] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const filteredTools = ToolsIconData.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) && // Access name property
        !userData?.tools?.includes(tool.name) // Check for undefined and compare names
    );
    setSuggestionTools(filteredTools);
  }, [searchTerm, userData?.tools]);

  const handleSelectTool = (tool) => {
    const updatedTools = [...(userData.tools || []), tool.name]; // Ensure userData.tools is an array and add tool name
    setUserData({ ...userData, tools: updatedTools });
    setSearchTerm('');
    setSuggestionTools(suggestionTools.filter((t) => t.name !== tool.name));
    inputRef.current.focus();
  };

  const handleRemoveTool = (toolName) => {
    const updatedTools = userData.tools.filter(
      (selectedTool) => selectedTool !== toolName
    );
    setUserData({ ...userData, tools: updatedTools });
    setSuggestionTools(
      ToolsIconData.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) && // Access name property
          !updatedTools.includes(tool.name) // Compare names
      )
    );
  };

  return (
    <>
      <div className="rounded-lg w-full focus:border-blue-300">
        <label
          htmlFor="toolsInput"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Add your tools
        </label>
        <div className="flex flex-wrap gap-2 my-2">
          {(userData?.tools || []).map(
            (
              toolName // Ensure userData.tools is an array
            ) => (
              <div key={toolName} className="flex items-center">
                <button
                  onClick={() => handleRemoveTool(toolName)}
                  className="flex items-center justify-center px-2 bg-indigo-100 text-indigo-500 text-sm max-lg:text-xs rounded-lg cursor-pointer"
                >
                  <img
                    src={ToolsIconData.find((t) => t.name === toolName)?.URL}
                    alt={toolName}
                    className="w-5 h-5 mr-2"
                  />
                  {toolName} <IoClose className="ml-2" />
                </button>
              </div>
            )
          )}
        </div>

        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Add Tools"
          className="outline-none rounded-lg placeholder:text-sm placeholder:text-zinc-500 py-2 px-2 border border-gray-400 focus:ring-1 focus:border-0 w-3/4"
        />
      </div>
      {/* Suggestion */}
      {searchTerm.length > 0 &&
        suggestionTools.length > 0 && ( // Show suggestions only if there's a search term and suggestions exist
          <div className="relative">
            <ul className="bg-white rounded-md absolute top-1 w-72">
              {suggestionTools.slice(0, 5).map((tool) => (
                <li
                  key={tool.name}
                  onClick={() => handleSelectTool(tool)}
                  className="flex items-center gap-2 p-1 px-2 my-2 hover:bg-gray-200 cursor-pointer text-sm font-medium"
                >
                  <img src={tool.URL} alt={tool.name} className="w-5 h-5" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};

export default Tools;
