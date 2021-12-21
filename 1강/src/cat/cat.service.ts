import { Request, Response } from "express";
import { Cat, CatType } from "./cat.model";

//* GET 고양이 전체 데이터 읽기
export const readCat = (req: Request, res: Response) => {
  try {
    const cat = Cat;
    res.send({
      success: true,
      data: {
        cats: cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* GET 특정 고양이 데이터 읽기
export const readCatById = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => cat.id === params.id);
    res.send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* POST 새로운 고양이 추가
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({ success: true, data });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* PATCH 기존 데이터 일부 업데이트
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body: CatType = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* DELETE 기존 데이터 삭제
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: {
        cat: newCat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
