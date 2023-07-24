"use client";

import React, { Fragment } from "react";
import { InputFile } from "./ui/inputFile";
import { parse, unparse } from "papaparse";
import { cn } from "@/lib/utils";

const CSVForm = () => {
  const [CSVData, setCSVData] = React.useState<any>();

  console.log({ CSVData });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    parse(file, {
      delimiter: ";",
      complete: function (results) {
        let topInfo, data;
        parse(unparse(results.data.slice(0, 2)), {
          delimiter: ",",
          header: true,
          complete: function (results) {
            delete results.data[0][""];
            topInfo = results.data[0];
          },
        });
        parse(unparse(results.data.slice(2)), {
          delimiter: ",",
          header: true,
          complete: function (results) {
            results.data.pop();
            data = results.data;
          },
        });
        setCSVData({ topInfo, data });
      },
    });
  };

  return (
    <>
      <InputFile
        label="Select CSV file"
        name="csv"
        accept=".csv"
        onChange={handleOnChange}
      />
      <div className="grid grid-cols-4">
        {CSVData &&
          Object.keys(CSVData.data[0]).map((key) => (
            <div
              key={crypto.randomUUID()}
              className={`border border-gray-400 p-2`}
            >
              {key}
            </div>
          ))}
        {CSVData &&
          CSVData.data.map((row: any) => (
            <Fragment key={crypto.randomUUID()}>
              {Object.keys(row).map((key) => (
                <div
                  key={crypto.randomUUID()}
                  className={`border border-gray-400 p-2`}
                >
                  {row[key]}
                </div>
              ))}
            </Fragment>
          ))}
      </div>
      <pre>{JSON.stringify(CSVData, null, 2)}</pre>
    </>
  );
};

export default CSVForm;
