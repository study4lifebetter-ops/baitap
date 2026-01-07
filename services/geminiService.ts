
import { GoogleGenAI } from "@google/genai";
import { TrainingPlanParams, StatsParams } from "../types";

// Always use process.env.API_KEY directly when initializing GoogleGenAI
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateTrainingPlan = async (params: TrainingPlanParams): Promise<string> => {
  const ai = getAIClient();
  const prompt = `Bạn là một huấn luyện viên bóng rổ NBA chuyên nghiệp. 
  Hãy lập một kế hoạch tập luyện 3 ngày chi tiết cho một cầu thủ ở vị trí ${params.position} 
  với mục tiêu: "${params.goal}". 
  Hãy viết bằng tiếng Việt, giọng văn khích lệ, chuyên nghiệp và có các bài tập cụ thể (số hiệp, số lần). 
  Định dạng câu trả lời gọn gàng với tiêu đề, sử dụng emoji thể thao và Markdown.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });

  return response.text || "Xin lỗi, Coach AI đang bận một chút. Vui lòng thử lại sau.";
};

export const analyzeStats = async (params: StatsParams): Promise<string> => {
  const ai = getAIClient();
  const prompt = `Bạn là chuyên gia phân tích bóng rổ chuyên nghiệp. 
  Dưới đây là thông số một trận đấu của học viên: Điểm: ${params.points}, Rebounds: ${params.rebounds}, Kiến tạo (Assists): ${params.assists}.
  Hãy đưa ra nhận xét ngắn gọn về phong cách thi đấu của họ. 
  Sau đó đưa ra 2 lời khuyên chuyên môn để họ cải thiện dựa trên các thông số này. 
  Ngôn ngữ: Tiếng Việt, phong cách mạnh mẽ, chuyên nghiệp. Sử dụng Markdown.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });

  return response.text || "Xin lỗi, việc phân tích gặp gián đoạn. Vui lòng thử lại.";
};
