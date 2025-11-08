import userProg from "../models/userProg.js";

export const updatePrg = async (req, res) => {
  try {
    const userId = req.user.id;
    const { chapter, shlok } = req.body;
    let prges = await userProg.findOne({ userId });

    if (!prges) {
      prges = new userProg({ userId, chapter, shlok });
    } else {
      prges.chapter = chapter;
      prges.shlok = shlok;
      prges.updatedAt = Date.now();
    }

    await prges.save();

    res.json({ message: "Progress updated", prges });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProgress = async (req, res) => {
  try {
    const userId = req.user.id;

    const progess = await userProg.findOne({ userId });

    if (!progess) {
      return res.json({chapter: null, shlok: null });
    }

    res.json({
      chapter: progess.chapter,
      shlok: progess.shlok,
      updatedAt: progess.updatedAt
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
