import mongoose from "mongoose";

export async function connectionDB() {
  const uri = process.env.DB_URI!
//   if (!uri) {
//     console.error('❌ خطأ: لم يتم العثور على متغير البيئة DB_URI في ملف .env')
//     return
//   }
  // تجنب إنشاء اتصال جديد إذا كان هناك اتصال نشط بالفعل
  if (mongoose.connection.readyState >= 1) {
    return
  }
  try {
    await mongoose.connect(
      uri ||
        'mongodb+srv://rooah2002k_db_user:8zylWlcTQ1hphweo@timacluster0.ahc3idx.mongodb.net/?appName=TimaCluster0',
    )
    console.log('🔌 تم الاتصال بقاعدة بيانات MongoDB بنجاح!')
  } catch (err) {
    console.error('❌ فشل الاتصال بقاعدة البيانات:', err)
  }
}