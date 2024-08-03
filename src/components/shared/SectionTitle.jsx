export function SectionTitle({ title }) {
  return (
    <>
      <h3 className="text-2xl font-bold">
        {title}
      </h3>
      <hr className="h-px mt-2 mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  )
}
