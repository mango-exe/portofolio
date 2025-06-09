import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ name, description, github, live, technologies }) => {
  return (
    <div className="border-4 rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{name}</h3>
        {technologies && (
          <div className="text-xs text-gray-300 ml-4 max-w-xs text-right">
            {technologies.join(', ')}
          </div>
        )}
      </div>
      <p className="text-sm text-white mt-2">{description}</p>
      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
