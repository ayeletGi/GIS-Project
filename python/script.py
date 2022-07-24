import pandas as pd
import json 

stat_df = pd.read_csv("./data/satistic-data.csv", encoding="ISO-8859-8")
stat_df = stat_df.drop(columns=['SHEM_YISHUV', 'SEMEL_YISHUV', 'Stat11_Ref', 'Stat11_Unite', 'Main_Function_Code',
                       'Main_Function_Txt', 'Religion_yishuv_Code', 'Religion_yishuv_Txt', 'YISHUV_STAT11'])
stat_df.drop_duplicates()
stat_df = stat_df.dropna()
# print(stat_df.columns)

telAviv_data = stat_df[stat_df['SHEM_YISHUV_ENGLISH'] == 'TEL AVIV - YAFO']
# print(telAviv_data.head)

result = telAviv_data.to_json(orient="records")
parsed = json.loads(result)
json.dumps(parsed, indent=4)
# print(parsed)

with open("./data/tel-aviv-stats.json", "w+") as f:
    f.writelines(result)
