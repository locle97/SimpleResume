import { GrayHRLine } from './shared/GrayHRLine';
import { SectionTitle } from './shared/SectionTitle';
import { TitleWithPeriod } from './shared/TitleWithPeriod';

function ProjectTableRow ({ row }) {
  return (
    <tr className="border">
      <td className="pl-2 my-2 font-bold border sub-title w-1/4">{row.title}</td>
      <td >
        <p className="pl-2 my-2">{row.description}</p>
        {
          row.items && 
          <ul className='pl-8 my-2'>
            {
              row.items.map(item => (
                <li className="list-disc" key={item}>{item}</li>
              ))
            }
          </ul>
        }
      </td>
    </tr>
  )
}

function ProjectTable({ rows }) {
  return (
    <table className="table-auto border-collapse border border-black">
      <tbody>
        {
          rows.map(row => (
            <ProjectTableRow key={row.id} row={row} />
          ))
        }
      </tbody>
    </table>
  )
}

function ProjectItem({ project }) {
  return (
    <>
      <div className="flex flex-col">
        <TitleWithPeriod title={project.name} period={project.period} />
        <ProjectTable rows={project.sections} />
      </div>
    </>
  );
}

export function ProjectSection({ projects }) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col mb-6">
      <SectionTitle title="Projects"/>
      {
        projects.map(project => (
          <div key={project.id}>
            <ProjectItem key={project.id} project={project} />
            <GrayHRLine />
          </div>
        ))
      }
    </div>
  )
}
