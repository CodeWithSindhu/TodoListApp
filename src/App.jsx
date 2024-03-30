import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import "./App.css";
const TodoList = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [AddTask, setAddTask] = useState([]);
  const submitHandle = (e) => {
    e.preventDefault();
    if (Title.length > 0 && Description.length > 0) {
      setAddTask([...AddTask, { Title, Description }]);
      setTitle("");
      setDescription("");
    }
  };
  let showTask = <div>No Task Available</div>;

  if (AddTask.length > 0) {
    showTask = AddTask.map((t, i) => {
      return (
        <>
          <div className="w-full px-4 pt-5 ">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{t.Title}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {t.Description}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </>
      );
    });
  }

  return (
    <>
      <div className="flex justify-center center">
        <form
          className="w-[80vw] center p-5 flex justify-center flex-col bg-black rounded my-2"
          onSubmit={submitHandle}
        >
          <div className="flex flex-row my-2 gap-6">
            <Input
              color="white"
              label="Title"
              value={Title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Input
              color="white"
              label="Description"
              value={Description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <Button variant="gradient" color="white" type="submit">
            Add task
          </Button>
        </form>
      </div>
      {showTask}
    </>
  );
};

export default TodoList;
